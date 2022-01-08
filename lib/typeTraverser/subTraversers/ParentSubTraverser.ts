/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseReturnType, BaseTraverserTypes, TraverserTypes } from "../";
import { TransformerReturnTypes } from "../TransformerReturnTypes";
import { interfaceSubTraverser } from "./InterfaceSubTraverser";
import { primitiveSubTraverser } from "./PrimitiveSubTraverser";
import { unionSubTraverser } from "./UnionSubTraverser";
import { SubTraverser, SubTraverserGlobals } from "./util/subTraverserTypes";
import { timeout } from "./util/timeout";

const subTraversers: Record<string, SubTraverser<any, any, any, any, any>> = {
  interface: interfaceSubTraverser,
  union: unionSubTraverser,
  primitive: primitiveSubTraverser,
};

export async function parentSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends BaseTraverserTypes<keyof Types>,
  ReturnType extends BaseReturnType<Types, TypeName>
>(
  item: Type["type"],
  itemTypeName: TypeName,
  globals: SubTraverserGlobals<Types, ReturnTypes>
): Promise<ReturnType["return"]> {
  const { traverserDefinition, executingPromises } = globals;
  if (executingPromises.has(item, itemTypeName)) {
    return executingPromises.get(item, itemTypeName)?.promise;
  }
  const subTraverser: SubTraverser<
    Types,
    TypeName,
    ReturnTypes,
    Type,
    ReturnType
  > = subTraversers[traverserDefinition[itemTypeName].kind];
  const executingPromise = {
    promise: (async () => {
      // This timeout exists to ensure that this promise is recorded
      // in executing promises before we continue traversing.
      await timeout(0);
      return subTraverser(item, itemTypeName, globals);
    })(),
    isResolved: false,
  };
  executingPromises.set(item, itemTypeName, executingPromise);
  const toReturn = await executingPromise.promise;
  executingPromise.isResolved = true;
  return toReturn;
}
