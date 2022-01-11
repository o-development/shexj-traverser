/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseTraverserTypes,
  TraverserDefinition,
  TraverserTypes,
  Visitors,
} from "../..";

export type VisitorSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  Type extends BaseTraverserTypes<keyof Types>,
  Context
> = (
  item: Type["type"],
  itemTypeName: TypeName,
  globals: VisitorSubTraverserGlobals<Types, Context>
) => Promise<void>;

export interface VisitorSubTraverserGlobals<
  Types extends TraverserTypes<any>,
  Context
> {
  traverserDefinition: TraverserDefinition<Types>;
  visitors: Visitors<Types, Context>;
  context: Context;
}
