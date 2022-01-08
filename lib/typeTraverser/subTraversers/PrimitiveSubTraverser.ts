/* eslint-disable @typescript-eslint/no-explicit-any */
import { TraverserTypes } from "../";
import {
  PrimitiveReturnType,
  TransformerReturnTypes,
} from "../TransformerReturnTypes";
import { PrimitiveTransformerDefinition } from "../Transformers";
import { PrimitiveType } from "../TraverserTypes";
import { SubTraverserGlobals } from "./util/subTraverserTypes";

export async function primitiveSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends PrimitiveType,
  ReturnType extends PrimitiveReturnType
>(
  item: Type["type"],
  itemTypeName: TypeName,
  globals: SubTraverserGlobals<Types, ReturnTypes>
): Promise<ReturnType["return"]> {
  const { transformers } = globals;
  const transformer = transformers[
    itemTypeName
  ] as unknown as PrimitiveTransformerDefinition<Type, ReturnType>;
  return transformer(item);
}
