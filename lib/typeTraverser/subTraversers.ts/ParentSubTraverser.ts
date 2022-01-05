/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseReturnType, BaseTraverserTypes, TraverserTypes } from "../";
import { TransformerReturnTypes } from "../TransformerReturnTypes";
import { Transformers } from "../Transformers";
import { TraverserDefinition } from "../TraverserDefinition";
import { interfaceSubTraverser } from "./InterfaceSubTraverser";
import { unionSubTraverser } from "./UnionSubTraverser";

export async function parentSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends BaseTraverserTypes<keyof Types>,
  ReturnType extends BaseReturnType<Types, TypeName>
>(
  item: Type["type"],
  itemTypeName: TypeName,
  globals: {
    traverserDefinition: TraverserDefinition<Types>;
    transformers: Transformers<Types, ReturnTypes>;
    visitedObjects: WeakMap<object, Map<TypeName, Promise<any>>>;
  }
): Promise<ReturnType["return"]> {
  console.log(itemTypeName);
  const { traverserDefinition, visitedObjects } = globals;
  if (visitedObjects.has(item) && visitedObjects.get(item)?.has(itemTypeName)) {
    return visitedObjects.get(item)?.get(itemTypeName);
  }
  if (!visitedObjects.has(item)) {
    visitedObjects.set(item, new Map());
  }
  let promiseResolve: (
    value: ReturnType["return"] | PromiseLike<ReturnType["return"]>
  ) => void;
  const promiseToReturn: Promise<ReturnType["return"]> = new Promise<
    ReturnType["return"]
  >((resolve) => {
    promiseResolve = resolve;
  });
  let valueToReturn: ReturnType["return"];
  visitedObjects.get(item)?.set(itemTypeName, promiseToReturn);
  if (traverserDefinition[itemTypeName].kind === "interface") {
    valueToReturn = await interfaceSubTraverser(item, itemTypeName, globals);
  } else if (traverserDefinition[itemTypeName].kind === "union") {
    valueToReturn = await unionSubTraverser(item, itemTypeName, globals);
  } else {
    throw new Error("Unsupported Traverser Type");
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  promiseResolve(valueToReturn);
  return valueToReturn;
}
