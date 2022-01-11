/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseTraverserTypes, TraverserTypes } from "..";
import {
  VisitorSubTraverser,
  VisitorSubTraverserGlobals,
} from "./util/visitorSubTraverserTypes";
import { visitorInterfaceSubTraverser } from "./VisitorInterfaceSubTraverser";
import { visitorUnionSubTraverser } from "./VisitorUnionSubTraverser";
import { visitorPrimitiveSubTraverser } from "./VisitorPrimitiveSubTraverser";

const subTraversers: Record<string, VisitorSubTraverser<any, any, any, any>> = {
  interface: visitorInterfaceSubTraverser,
  union: visitorUnionSubTraverser,
  primitive: visitorPrimitiveSubTraverser,
};

export async function visitorParentSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  Type extends BaseTraverserTypes<keyof Types>,
  Context
>(
  item: Type["type"],
  itemTypeName: TypeName,
  globals: VisitorSubTraverserGlobals<Types, Context>
): Promise<void> {
  const { traverserDefinition } = globals;
  const subTraverser: VisitorSubTraverser<Types, TypeName, Type, Context> =
    subTraversers[traverserDefinition[itemTypeName].kind];
  return subTraverser(item, itemTypeName, globals);
}
