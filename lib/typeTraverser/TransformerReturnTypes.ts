import { InterfaceType, TraverserTypes, UnionType } from ".";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type InterfaceReturnType<Type extends InterfaceType<any, any>> = {
  return: any;
  properties: Partial<{
    [PropertyName in keyof Type["properties"]]: any;
  }>;
};

export type UnionReturnType = {
  return: any;
};

export type TransformerReturnTypes<Types extends TraverserTypes<any>> = {
  [TypeName in keyof Types]: Types[TypeName] extends InterfaceType<
    keyof Types,
    any
  >
    ? InterfaceReturnType<Types[TypeName]>
    : Types[TypeName] extends UnionType<keyof Types, any>
    ? UnionReturnType
    : never;
};
