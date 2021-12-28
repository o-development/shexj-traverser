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
  Type extends BaseTraverserTypes<keyof Types, any>,
  ReturnType extends BaseReturnType<Types, TypeName>
>(
  item: Type["type"],
  itemTypeName: TypeName,
  traverserDefinition: TraverserDefinition<Types>,
  transformers: Transformers<Types, ReturnTypes>
): Promise<ReturnType["return"]> {
  if (traverserDefinition[itemTypeName].kind === "interface") {
    return interfaceSubTraverser(
      item,
      itemTypeName,
      traverserDefinition,
      transformers
    );
  } else if (traverserDefinition[itemTypeName].kind === "union") {
    return unionSubTraverser(
      item,
      itemTypeName,
      traverserDefinition,
      transformers
    );
  }
}
