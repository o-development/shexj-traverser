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
  const {
    traverserDefinition,
    transformers,
    circularDependencyAwaiter,
    executingPromises,
  } = globals;
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
          const onResolve = circularDependencyAwaiter.add(
            item,
            itemTypeName,
            item,
            itemSpecificTypeName,
            executingPromises
          );
          const toReturn = parentSubTraverser(
            item,
            itemSpecificTypeName,
            globals
          );
          onResolve();
          return toReturn;
        },
        async (input) => {
          resolve(input);
        }
      );
      resolve(transformedObject);
    } catch (err) {
      reject(err);
    }
  });
}
