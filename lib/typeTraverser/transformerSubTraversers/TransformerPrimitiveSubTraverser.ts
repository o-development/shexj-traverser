/* eslint-disable @typescript-eslint/no-explicit-any */
import { TraverserTypes } from "..";
import {
  PrimitiveReturnType,
  TransformerReturnTypes,
} from "../TransformerReturnTypes";
import { PrimitiveTransformerDefinition } from "../Transformers";
import { PrimitiveType } from "../TraverserTypes";
import { TransformerSubTraverserGlobals } from "./util/transformerSubTraverserTypes";

export async function transformerPrimitiveSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends PrimitiveType,
  ReturnType extends PrimitiveReturnType,
  Context
>(
  item: Type["type"],
  itemTypeName: TypeName,
  globals: TransformerSubTraverserGlobals<Types, ReturnTypes, Context>
): Promise<ReturnType["return"]> {
  const { transformers } = globals;
  const transformer = transformers[
    itemTypeName
  ] as unknown as PrimitiveTransformerDefinition<Type, ReturnType, Context>;
  return transformer(item, globals.context);
}
