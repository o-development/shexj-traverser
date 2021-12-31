/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApplyTransformerReturnTypesDefaults,
  InterfaceReturnType,
  InterfaceType,
  TransformerInputReturnTypes,
  TransformerReturnTypes,
  TraverserTypes,
  UnionReturnType,
  UnionType,
} from ".";

export type InterfaceTransformerFunction<
  Types extends TraverserTypes<any>,
  Type extends InterfaceType<keyof Types>,
  ReturnType extends InterfaceReturnType<Type>
> = (
  originalData: Type["type"],
  childData: {
    [PropertyName in keyof ReturnType["properties"]]: NonNullable<
      Type["type"][PropertyName]
    > extends Array<any>
      ? Array<ReturnType["properties"][PropertyName]>
      : ReturnType["properties"][PropertyName];
  }
) => Promise<ReturnType["return"]>;

export type InterfaceTransformerPropertyFunction<
  Types extends TraverserTypes<any>,
  Type extends InterfaceType<keyof Types>,
  ReturnTypes extends TransformerReturnTypes<Types>,
  ReturnType extends InterfaceReturnType<Type>,
  PropertyName extends keyof Type["properties"]
> = (
  originalData: Types[Type["properties"][PropertyName]]["type"],
  childData: ReturnTypes[Type["properties"][PropertyName]]["return"]
) => Promise<ReturnType["properties"][PropertyName]>;

export type InterfaceTransformerDefinition<
  Types extends TraverserTypes<any>,
  Type extends InterfaceType<keyof Types>,
  ReturnTypes extends TransformerReturnTypes<Types>,
  ReturnType extends InterfaceReturnType<Type>
> = {
  transformer: InterfaceTransformerFunction<Types, Type, ReturnType>;
  properties: {
    [PropertyName in keyof Type["properties"]]: InterfaceTransformerPropertyFunction<
      Types,
      Type,
      ReturnTypes,
      ReturnType,
      PropertyName
    >;
  };
};

export type UnionTransformerFunction<
  Types extends TraverserTypes<any>,
  Type extends UnionType<keyof Types>,
  ReturnTypes extends TransformerReturnTypes<Types>,
  ReturnType extends UnionReturnType
> = (
  originalData: Type["type"],
  childData: ReturnTypes[Type["typeNames"]]["return"]
) => Promise<ReturnType["return"]>;

export type UnionTransformerDefinition<
  Types extends TraverserTypes<any>,
  Type extends UnionType<keyof Types>,
  ReturnTypes extends TransformerReturnTypes<Types>,
  ReturnType extends UnionReturnType
> = UnionTransformerFunction<Types, Type, ReturnTypes, ReturnType>;

export type TransformerDefinition<
  Types extends TraverserTypes<any>,
  ReturnTypes extends TransformerReturnTypes<Types>,
  TypeName extends keyof Types
> = Types[TypeName] extends InterfaceType<keyof Types>
  ? ReturnTypes[TypeName] extends InterfaceReturnType<Types[TypeName]>
    ? InterfaceTransformerDefinition<
        Types,
        Types[TypeName],
        ReturnTypes,
        ReturnTypes[TypeName]
      >
    : never
  : Types[TypeName] extends UnionType<keyof Types>
  ? ReturnTypes[TypeName] extends UnionReturnType
    ? UnionTransformerDefinition<
        Types,
        Types[TypeName],
        ReturnTypes,
        ReturnTypes[TypeName]
      >
    : never
  : never;

export type Transformers<
  Types extends TraverserTypes<any>,
  ReturnTypes extends TransformerReturnTypes<Types>
> = {
  [TypeName in keyof ReturnTypes]: TransformerDefinition<
    Types,
    ReturnTypes,
    TypeName
  >;
};

/**
 * Input
 */
export type InterfaceTransformerInputDefinition<
  Types extends TraverserTypes<any>,
  Type extends InterfaceType<keyof Types>,
  ReturnTypes extends TransformerReturnTypes<Types>,
  ReturnType extends InterfaceReturnType<Type>
> = {
  transformer: InterfaceTransformerFunction<Types, Type, ReturnType>;
  properties?: Partial<{
    [PropertyName in keyof Type["properties"]]: InterfaceTransformerPropertyFunction<
      Types,
      Type,
      ReturnTypes,
      ReturnType,
      PropertyName
    >;
  }>;
};

export type UnionTransformerInputDefinition<
  Types extends TraverserTypes<any>,
  Type extends UnionType<keyof Types>,
  ReturnTypes extends TransformerReturnTypes<Types>,
  ReturnType extends UnionReturnType
> = UnionTransformerFunction<Types, Type, ReturnTypes, ReturnType>;

export type TransformerInputDefinition<
  Types extends TraverserTypes<any>,
  ReturnTypes extends TransformerReturnTypes<Types>,
  TypeName extends keyof Types
> = Types[TypeName] extends InterfaceType<keyof Types>
  ? ReturnTypes[TypeName] extends InterfaceReturnType<Types[TypeName]>
    ? InterfaceTransformerInputDefinition<
        Types,
        Types[TypeName],
        ReturnTypes,
        ReturnTypes[TypeName]
      >
    : never
  : Types[TypeName] extends UnionType<keyof Types>
  ? ReturnTypes[TypeName] extends UnionReturnType
    ? UnionTransformerInputDefinition<
        Types,
        Types[TypeName],
        ReturnTypes,
        ReturnTypes[TypeName]
      >
    : never
  : never;

export type TransformersInput<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  ReturnTypes extends TransformerReturnTypes<Types> = ApplyTransformerReturnTypesDefaults<
    Types,
    InputReturnTypes
  >
> = Partial<{
  [TypeName in keyof ReturnTypes]: undefined extends InputReturnTypes[TypeName]
    ? TransformerInputDefinition<Types, ReturnTypes, TypeName> | undefined
    : TransformerInputDefinition<Types, ReturnTypes, TypeName>;
}>;
