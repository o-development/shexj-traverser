/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseReturnType, BaseTraverserTypes, TraverserTypes } from "../";
import { TransformerReturnTypes } from "../TransformerReturnTypes";
import { Transformers } from "../Transformers";
import { TraverserDefinition } from "../TraverserDefinition";
import { interfaceSubTraverser } from "./InterfaceSubTraverser";
import { primitiveSubTraverser } from "./PrimitiveSubTraverser";
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
    visitedObjects: Map<object, Set<TypeName>>;
    objectReturns: Map<object, Map<TypeName, Promise<any>>>;
  }
): Promise<ReturnType["return"]> {
  const { traverserDefinition, visitedObjects } = globals;
  if (visitedObjects.get(item)?.has(itemTypeName)) {
    return;
  }
  const newVisitedObjects = new Map(visitedObjects);
  newVisitedObjects.set(
    item,
    new Set(newVisitedObjects.get(item)).add(itemTypeName)
  );
  const newGlobals = {
    ...globals,
    visitedObjects: newVisitedObjects,
  };

  if (traverserDefinition[itemTypeName].kind === "interface") {
    return interfaceSubTraverser(item, itemTypeName, newGlobals);
  } else if (traverserDefinition[itemTypeName].kind === "union") {
    return unionSubTraverser(item, itemTypeName, newGlobals);
  } else if (traverserDefinition[itemTypeName].kind === "primitive") {
    return primitiveSubTraverser(item, itemTypeName, newGlobals);
  } else {
    throw new Error("Unsupported Traverser Type");
  }
}
