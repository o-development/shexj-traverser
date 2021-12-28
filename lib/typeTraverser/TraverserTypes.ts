/* eslint-disable @typescript-eslint/no-explicit-any */
import { AssertExtends, KeyTypes } from "./UtilTypes";

export interface InterfaceType<TypeNames extends KeyTypes, Type> {
  kind: "interface";
  type: Type;
  properties: {
    [key in keyof Type]: TypeNames;
  };
}

export interface UnionType<TypeNames extends KeyTypes, Type> {
  kind: "union";
  type: Type;
  typeNames: TypeNames;
}

export type BaseTraverserTypes<TypeNames extends KeyTypes, Type> =
  | InterfaceType<TypeNames, Type>
  | UnionType<TypeNames, Type>;

export type TraverserTypes<TypeNames extends KeyTypes> = {
  [Property in TypeNames]: BaseTraverserTypes<TypeNames, any>;
};

export type ValidateTraverserTypes<Types extends TraverserTypes<any>> =
  AssertExtends<TraverserTypes<keyof Types>, Types>;
