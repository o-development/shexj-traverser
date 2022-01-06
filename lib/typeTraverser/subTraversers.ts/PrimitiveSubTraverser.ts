/* eslint-disable @typescript-eslint/no-explicit-any */
import { TraverserTypes } from "../";
import {
  PrimitiveReturnType,
  TransformerReturnTypes,
} from "../TransformerReturnTypes";
import { PrimitiveTransformerDefinition, Transformers } from "../Transformers";
import { TraverserDefinition } from "../TraverserDefinition";
import { PrimitiveType } from "../TraverserTypes";

export async function primitiveSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends PrimitiveType,
  ReturnType extends PrimitiveReturnType
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
  const { transformers } = globals;
  const transformer = transformers[
    itemTypeName
  ] as unknown as PrimitiveTransformerDefinition<Type, ReturnType>;
  return transformer(item);
}
