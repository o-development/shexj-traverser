/* eslint-disable @typescript-eslint/no-explicit-any */
import { AssertExtends, KeyTypes } from "./UtilTypes";

export interface InterfaceType<TypeNames extends KeyTypes> {
  kind: "interface";
  type: any;
  properties: {
    [key: string]: TypeNames;
  };
}

export interface UnionType<TypeNames extends KeyTypes> {
  kind: "union";
  type: any;
  typeNames: TypeNames;
}

export type BaseTraverserTypes<TypeNames extends KeyTypes> =
  | InterfaceType<TypeNames>
  | UnionType<TypeNames>;

export type TraverserTypes<TypeNames extends KeyTypes> = {
  [Property in TypeNames]: BaseTraverserTypes<TypeNames>;
};

export type ValidateTraverserTypes<Types extends TraverserTypes<any>> =
  AssertExtends<TraverserTypes<keyof Types>, Types>;
