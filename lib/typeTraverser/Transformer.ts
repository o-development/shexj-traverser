/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApplyTransformerReturnTypesDefaults,
  InterfaceReturnType,
  InterfaceTraverserDefinition,
  InterfaceType,
  KeyTypes,
  PrimitiveReturnType,
  PrimitiveType,
  TransformerInputReturnTypes,
  TraverserDefinition,
  TraverserTypes,
  UnionReturnType,
  UnionType,
} from ".";
import { parentSubTraverser } from "./subTraversers/ParentSubTraverser";
import { CircularDepenedencyAwaiter } from "./subTraversers/util/CircularDependencyAwaiter";
import { MultiMap } from "./subTraversers/util/MultiMap";
import { MultiSet } from "./subTraversers/util/MultiSet";
import { SuperPromise } from "./subTraversers/util/SuperPromise";
import {
  GetTransformedChildrenFunction,
  InterfaceTransformerDefinition,
  InterfaceTransformerInputDefinition,
  PrimitiveTransformerDefinition,
  PrimitiveTransformerInputDefinition,
  Transformers,
  TransformersInput,
  UnionTransformerDefinition,
  UnionTransformerInputDefinition,
} from "./Transformers";

// TODO: Lots of "any" in this file. I'm just done with fancy typescript,
// but if I ever feel so inclined, I should fix this in the future.

export class Transformer<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>
> {
  private traverserDefinition: TraverserDefinition<Types>;
  private transformers: Transformers<
    Types,
    ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>
  >;

  constructor(
    traverserDefinition: TraverserDefinition<Types>,
    transformers: TransformersInput<Types, InputReturnTypes>
  ) {
    this.traverserDefinition = traverserDefinition;
    this.transformers = this.applyDefaultTransformers(transformers);
  }

  private applyDefaultInterfaceTransformerProperties<
    Type extends InterfaceType<keyof Types>,
    ReturnType extends InterfaceReturnType<Type>
  >(
    typeName: keyof Types,
    typePropertiesInput: InterfaceTransformerInputDefinition<
      Types,
      Type,
      ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>,
      ReturnType
    >["properties"]
  ): InterfaceTransformerDefinition<
    Types,
    Type,
    ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>,
    ReturnType
  >["properties"] {
    return Object.keys(
      (this.traverserDefinition[typeName] as InterfaceTraverserDefinition<Type>)
        .properties
    ).reduce<Record<KeyTypes, any>>((agg, key: keyof Type["properties"]) => {
      if (typePropertiesInput && typePropertiesInput[key]) {
        agg[key] = typePropertiesInput[key];
      } else {
        agg[key] = (
          originalData: any,
          getTransformedChildren: GetTransformedChildrenFunction<any>
        ) => {
          return getTransformedChildren();
        };
      }
      return agg;
    }, {}) as InterfaceTransformerDefinition<
      Types,
      Type,
      ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>,
      ReturnType
    >["properties"];
  }

  private applyDefaultInterfaceTransformer<
    Type extends InterfaceType<keyof Types>,
    ReturnType extends InterfaceReturnType<Type>
  >(
    typeName: keyof Types,
    typeInput?: InterfaceTransformerInputDefinition<
      Types,
      Type,
      ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>,
      ReturnType
    >
  ): InterfaceTransformerDefinition<
    Types,
    Type,
    ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>,
    ReturnType
  > {
    if (!typeInput) {
      return {
        transformer: async (
          originalData,
          getTransformedChildren: GetTransformedChildrenFunction<any>
        ) => {
          return getTransformedChildren();
        },
        properties: this.applyDefaultInterfaceTransformerProperties(
          typeName,
          {}
        ),
      };
    }
    return {
      transformer: typeInput.transformer,
      properties: this.applyDefaultInterfaceTransformerProperties(
        typeName,
        typeInput.properties
      ),
    };
  }

  private applyDefaultUnionTransformer<
    Type extends UnionType<keyof Types>,
    ReturnType extends UnionReturnType
  >(
    typeInput?: UnionTransformerInputDefinition<
      Types,
      Type,
      ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>,
      ReturnType
    >
  ): UnionTransformerDefinition<
    Types,
    Type,
    ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>,
    ReturnType
  > {
    if (!typeInput) {
      return async (
        originalData,
        getTransformedChildren: GetTransformedChildrenFunction<any>
      ) => {
        return getTransformedChildren();
      };
    }
    return typeInput;
  }

  private applyDefaultPrimitiveTransformer<
    Type extends PrimitiveType,
    ReturnType extends PrimitiveReturnType
  >(
    typeInput?: PrimitiveTransformerInputDefinition<Type, ReturnType>
  ): PrimitiveTransformerDefinition<Type, ReturnType> {
    if (!typeInput) {
      return async (originalData) => {
        return originalData;
      };
    }
    return typeInput;
  }

  private applyDefaultTransformers(
    inputTransformers: TransformersInput<Types, InputReturnTypes>
  ): Transformers<
    Types,
    ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>
  > {
    const finalTansformers: Partial<
      Transformers<
        Types,
        ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>
      >
    > = {};
    Object.keys(this.traverserDefinition).forEach((typeName: keyof Types) => {
      if (this.traverserDefinition[typeName].kind === "interface") {
        finalTansformers[typeName] = this.applyDefaultInterfaceTransformer(
          typeName,
          inputTransformers[typeName] as any
        ) as any;
      } else if (this.traverserDefinition[typeName].kind === "union") {
        finalTansformers[typeName] = this.applyDefaultUnionTransformer(
          inputTransformers[typeName] as any
        ) as any;
      } else if (this.traverserDefinition[typeName].kind === "primitive") {
        finalTansformers[typeName] = this.applyDefaultPrimitiveTransformer(
          inputTransformers[typeName] as any
        ) as any;
      }
    });
    return finalTansformers as Transformers<
      Types,
      ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>
    >;
  }

  public async transform<TypeName extends keyof Types>(
    item: Types[TypeName]["type"],
    itemTypeName: TypeName
  ): Promise<
    ApplyTransformerReturnTypesDefaults<
      Types,
      InputReturnTypes
    >[TypeName]["return"]
  > {
    const superPromise = new SuperPromise();
    const toReturn = await parentSubTraverser(item, itemTypeName, {
      traverserDefinition: this.traverserDefinition,
      transformers: this.transformers,
      visitedObjects: new MultiSet(),
      executingPromises: new MultiMap(),
      circularDependencyAwaiter: new CircularDepenedencyAwaiter(),
      superPromise,
    });
    await superPromise.wait();
    return toReturn;
  }
}
