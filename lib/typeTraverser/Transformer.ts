/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApplyTransformerReturnTypesDefaults,
  InterfaceReturnType,
  InterfaceTraverserDefinition,
  InterfaceType,
  KeyTypes,
  TransformerInputReturnTypes,
  TraverserDefinition,
  TraverserTypes,
  UnionReturnType,
  UnionType,
} from ".";
import { parentSubTraverser } from "./subTraversers.ts/ParentSubTraverser";
import {
  InterfaceTransformerDefinition,
  InterfaceTransformerInputDefinition,
  Transformers,
  TransformersInput,
  UnionTransformerDefinition,
  UnionTransformerInputDefinition,
} from "./Transformers";

// TODO: Lots of "any" in this file. I'm just done with fancy typescript, but if I ever feel so inclined, should fix this in the future.

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
    Type extends InterfaceType<keyof Types, any>,
    ReturnType extends InterfaceReturnType<Type>
  >(
    typeName: keyof Types,
    typePropertiesInput: InterfaceTransformerInputDefinition<
      Types,
      Type,
      ReturnType
    >["properties"]
  ): InterfaceTransformerDefinition<Types, Type, ReturnType>["properties"] {
    return Object.keys(
      (this.traverserDefinition[typeName] as InterfaceTraverserDefinition<Type>)
        .properties
    ).reduce<Record<KeyTypes, any>>((agg, key: keyof Type["properties"]) => {
      if (typePropertiesInput && typePropertiesInput[key]) {
        agg[key] = typePropertiesInput[key];
      } else {
        agg[key] = (originalData: any, childData: any) => {
          return childData;
        };
      }
      return agg;
    }, {}) as InterfaceTransformerDefinition<
      Types,
      Type,
      ReturnType
    >["properties"];
  }

  private applyDefaultInterfaceTransformer<
    Type extends InterfaceType<keyof Types, any>,
    ReturnType extends InterfaceReturnType<Type>
  >(
    typeName: keyof Types,
    typeInput?: InterfaceTransformerInputDefinition<Types, Type, ReturnType>
  ): InterfaceTransformerDefinition<Types, Type, ReturnType> {
    if (!typeInput) {
      return {
        transformer: (originalData, childData) => {
          return childData;
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
    Type extends UnionType<keyof Types, any>,
    ReturnType extends UnionReturnType
  >(
    typeInput?: UnionTransformerInputDefinition<Types, Type, ReturnType>
  ): UnionTransformerDefinition<Types, Type, ReturnType> {
    if (!typeInput) {
      return (originalData, childData) => {
        return childData;
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
      }
    });
    return finalTansformers as Transformers<
      Types,
      ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes>
    >;
  }

  public transform<TypeName extends keyof Types>(
    item: Types[TypeName]["type"],
    itemTypeName: TypeName
  ): Promise<
    ApplyTransformerReturnTypesDefaults<
      Types,
      InputReturnTypes
    >[TypeName]["return"]
  > {
    return parentSubTraverser(
      item,
      itemTypeName,
      this.traverserDefinition,
      this.transformers
    );
  }
}
