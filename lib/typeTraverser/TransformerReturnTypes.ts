import { InterfaceType, TraverserTypes, UnionType } from ".";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type InterfaceReturnType<Type extends InterfaceType<any>> = {
  return: any;
  properties: {
    [PropertyName in keyof Type["properties"]]: any;
  };
};

export type UnionReturnType = {
  return: any;
};

export type BaseReturnType<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types
> = Types[TypeName] extends InterfaceType<keyof Types>
  ? InterfaceReturnType<Types[TypeName]>
  : Types[TypeName] extends UnionType<keyof Types>
  ? UnionReturnType
  : never;

export type TransformerReturnTypes<Types extends TraverserTypes<any>> = {
  [TypeName in keyof Types]: BaseReturnType<Types, TypeName>;
};

/**
 * Input
 */
export type InterfacePropertiesInputReturnType<
  Type extends InterfaceType<any>
> = Partial<{
  [PropertyName in keyof Type["properties"]]: any;
}>;

export type InterfaceInputReturnType<Type extends InterfaceType<any>> = {
  return: any;
  properties?: InterfacePropertiesInputReturnType<Type>;
};

export type UnionInputReturnType = {
  return: any;
};

export type BaseInputReturnType<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types
> = Types[TypeName] extends InterfaceType<keyof Types>
  ? InterfaceInputReturnType<Types[TypeName]>
  : Types[TypeName] extends UnionType<keyof Types>
  ? UnionInputReturnType
  : never;

export type TransformerInputReturnTypes<Types extends TraverserTypes<any>> =
  Partial<{
    [TypeName in keyof Types]: BaseInputReturnType<Types, TypeName>;
  }>;
