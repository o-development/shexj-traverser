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

export type InterfaceInputReturnType<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types
> = Types[TypeName] extends InterfaceType<keyof Types>
  ? {
      return: any;
      properties?: InterfacePropertiesInputReturnType<Types[TypeName]>;
    }
  : never;

export type UnionInputReturnType<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types
> = Types[TypeName] extends UnionType<keyof Types>
  ? {
      return: any;
    }
  : never;

export type BaseInputReturnType<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types
> =
  | InterfaceInputReturnType<Types, TypeName>
  | UnionInputReturnType<Types, TypeName>;

export type TransformerInputReturnTypes<Types extends TraverserTypes<any>> =
  Partial<{
    [TypeName in keyof Types]: BaseInputReturnType<Types, TypeName>;
  }>;
