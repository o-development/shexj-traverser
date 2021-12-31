/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  InterfaceInputReturnType,
  InterfaceType,
  TransformerInputReturnTypes,
  TraverserTypes,
  UnionInputReturnType,
  UnionType,
} from ".";

export type InterfaceReturnTypeDefault<
  Types extends TraverserTypes<any>,
  Type extends InterfaceType<keyof Types, any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>
> = {
  return: Type["type"];
  properties: {
    [PropertyName in keyof Type["properties"]]: InputReturnTypes[Type["properties"][PropertyName]] extends NonNullable<
      InterfaceInputReturnType<Type>
    >
      ? InputReturnTypes[Type["properties"][PropertyName]]["return"]
      : Types[Type["properties"][PropertyName]]["type"];
  };
};

export type UnionReturnTypeDefault<Type extends UnionType<any, any>> = {
  return: Type["type"];
};

export type TransformerReturnTypesDefaults<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>
> = {
  [TypeName in keyof Types]: Types[TypeName] extends InterfaceType<
    keyof Types,
    any
  >
    ? InterfaceReturnTypeDefault<Types, Types[TypeName], InputReturnTypes>
    : Types[TypeName] extends UnionType<keyof Types, any>
    ? UnionReturnTypeDefault<Types[TypeName]>
    : never;
};

export type ApplyInterfaceReturnTypeDefault<
  Types extends TraverserTypes<any>,
  Type extends InterfaceType<keyof Types, any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  InputReturnType extends InterfaceInputReturnType<Type>
> = {
  return: InputReturnType["return"];
  properties: InputReturnType["properties"] extends NonNullable<
    InterfaceInputReturnType<Type>["properties"]
  >
    ? {
        [PropertyName in keyof Type["properties"]]: undefined extends InputReturnType["properties"][PropertyName]
          ? InterfaceReturnTypeDefault<
              Types,
              Type,
              InputReturnTypes
            >["properties"][PropertyName]
          : InputReturnType["properties"][PropertyName];
      }
    : InterfaceReturnTypeDefault<Types, Type, InputReturnTypes>["properties"];
};

export type ApplyTransformerReturnTypesDefaults<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>
> = {
  [TypeName in keyof Types]: undefined extends InputReturnTypes[TypeName]
    ? TransformerReturnTypesDefaults<Types, InputReturnTypes>[TypeName]
    : Types[TypeName] extends InterfaceType<keyof Types, any>
    ? InputReturnTypes[TypeName] extends InterfaceInputReturnType<
        Types[TypeName]
      >
      ? ApplyInterfaceReturnTypeDefault<
          Types,
          Types[TypeName],
          InputReturnTypes,
          InputReturnTypes[TypeName]
        >
      : never
    : Types[TypeName] extends UnionType<keyof Types, any>
    ? InputReturnTypes[TypeName] extends UnionInputReturnType
      ? InputReturnTypes[TypeName]
      : never
    : never;
};
