/* eslint-disable @typescript-eslint/no-explicit-any */
import { TraverserTypes } from "../";
import {
  TransformerReturnTypes,
  UnionReturnType,
} from "../TransformerReturnTypes";
import { Transformers, UnionTransformerDefinition } from "../Transformers";
import {
  TraverserDefinition,
  UnionTraverserDefinition,
} from "../TraverserDefinition";
import { UnionType } from "../TraverserTypes";
import { parentSubTraverser } from "./ParentSubTraverser";

export async function unionSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends UnionType<keyof Types, any>,
  ReturnType extends UnionReturnType
>(
  item: Type["type"],
  itemTypeName: TypeName,
  traverserDefinition: TraverserDefinition<Types>,
  transformers: Transformers<Types, ReturnTypes>
): Promise<ReturnType["return"]> {
  const definition = traverserDefinition[
    itemTypeName
  ] as UnionTraverserDefinition<Type>;
  const transformer = transformers[
    itemTypeName
  ] as unknown as UnionTransformerDefinition<
    Types,
    Type,
    ReturnTypes,
    ReturnType
  >;
  const itemSpecificTypeName = definition.selector(item);
  const transformedItem = await parentSubTraverser(
    item,
    itemSpecificTypeName,
    traverserDefinition,
    transformers
  );
  return transformer(item, transformedItem);
}
