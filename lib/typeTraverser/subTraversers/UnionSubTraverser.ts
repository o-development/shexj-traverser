/* eslint-disable @typescript-eslint/no-explicit-any */
import { TraverserTypes } from "../";
import {
  TransformerReturnTypes,
  UnionReturnType,
} from "../TransformerReturnTypes";
import { UnionTransformerDefinition } from "../Transformers";
import { UnionTraverserDefinition } from "../TraverserDefinition";
import { UnionType } from "../TraverserTypes";
import { parentSubTraverser } from "./ParentSubTraverser";
import { SubTraverserGlobals } from "./util/subTraverserTypes";

export async function unionSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends UnionType<keyof Types>,
  ReturnType extends UnionReturnType
>(
  item: Type["type"],
  itemTypeName: TypeName,
  globals: SubTraverserGlobals<Types, ReturnTypes>
): Promise<ReturnType["return"]> {
  const { traverserDefinition, transformers, superPromise } = globals;
  const resolveSuperPromise = superPromise.add();
  return new Promise<ReturnType["return"]>(async (resolve, reject) => {
    try {
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
      const transformedObject = transformer(
        item,
        async () => {
          const itemSpecificTypeName = definition.selector(item);
          return parentSubTraverser(item, itemSpecificTypeName, globals);
        },
        async (input) => {
          resolve(input);
        }
      );
      resolve(transformedObject);
      resolveSuperPromise();
    } catch (err) {
      reject(err);
    }
  });
}
