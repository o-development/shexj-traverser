/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  InterfaceReturnType,
  InterfaceType,
  TransformerReturnTypes,
  TraverserTypes,
  UnionReturnType,
  UnionType,
} from ".";

export type InterfaceReturnTypeDefault<
  Types extends TraverserTypes<any>,
  Type extends InterfaceType<keyof Types, any>
> = {
  return: Type["type"];
  properties: {
    [PropertyName in keyof Type["properties"]]: Types[Type["properties"][PropertyName]];
  };
};

export type UnionReturnTypeDefault<Type extends UnionType<any, any>> = {
  return: Type["type"];
};

export type TransformerReturnTypesDefaults<Types extends TraverserTypes<any>> =
  {
    [TypeName in keyof Types]: Types[TypeName] extends InterfaceType<
      keyof Types,
      any
    >
      ? InterfaceReturnTypeDefault<Types, Types[TypeName]>
      : Types[TypeName] extends UnionType<keyof Types, any>
      ? UnionReturnTypeDefault<Types[TypeName]>
      : never;
  };

export type ApplyInterfaceReturnTypeDefault<
  Types extends TraverserTypes<any>,
  Type extends InterfaceType<keyof Types, any>,
  InputReturnType extends InterfaceReturnType<Type>
> = {
  return: InputReturnType["return"];
  properties: {
    [PropertyName in keyof Type["properties"]]: undefined extends InputReturnType["properties"][PropertyName]
      ? InterfaceReturnTypeDefault<Types, Type>
      : InputReturnType["properties"][PropertyName];
  };
};

export type ApplyTransformerReturnTypesDefaults<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends Partial<TransformerReturnTypes<Types>>
> = {
  [TypeName in keyof Types]: undefined extends InputReturnTypes[TypeName]
    ? TransformerReturnTypesDefaults<Types>[TypeName]
    : Types[TypeName] extends InterfaceType<keyof Types, any>
    ? InputReturnTypes[TypeName] extends InterfaceReturnType<Types[TypeName]>
      ? ApplyInterfaceReturnTypeDefault<
          Types,
          Types[TypeName],
          InputReturnTypes[TypeName]
        >
      : never
    : Types[TypeName] extends UnionType<keyof Types, any>
    ? InputReturnTypes[TypeName] extends UnionReturnType
      ? InputReturnTypes[TypeName]
      : never
    : never;
};
