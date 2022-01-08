/* eslint-disable @typescript-eslint/no-explicit-any */
import { TraverserTypes } from "../";
import {
  InterfaceReturnType,
  TransformerReturnTypes,
} from "../TransformerReturnTypes";
import { InterfaceTransformerDefinition } from "../Transformers";
import { InterfaceTraverserDefinition } from "../TraverserDefinition";
import { InterfaceType } from "../TraverserTypes";
import { parentSubTraverser } from "./ParentSubTraverser";
import { SubTraverserGlobals } from "./util/subTraverserTypes";

export async function interfaceSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends InterfaceType<keyof Types>,
  ReturnType extends InterfaceReturnType<Type>
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
    superPromise,
  } = globals;
  const resolveSuperPromise = superPromise.add();
  return new Promise<ReturnType["return"]>(async (resolve, reject) => {
    try {
      // Get the returns for properties
      const definition = traverserDefinition[
        itemTypeName
      ] as InterfaceTraverserDefinition<Type>;
      const transformer = transformers[
        itemTypeName
      ] as unknown as InterfaceTransformerDefinition<
        Types,
        Type,
        ReturnTypes,
        ReturnType
      >;
      const transformedObject = await transformer.transformer(
        item,
        async () => {
          const propertiesReturn: ReturnType["properties"] = Object.fromEntries(
            await Promise.all(
              Object.entries(definition.properties).map(
                async ([propertyName]) => {
                  const originalObject = item[propertyName];
                  const originalPropertyDefinition =
                    definition.properties[propertyName];
                  const transformedProperty = await transformer.properties[
                    propertyName
                  ](originalObject, async () => {
                    if (originalObject === undefined) {
                      return undefined;
                    } else if (Array.isArray(originalObject)) {
                      return Promise.all(
                        originalObject.map(async (subObject) => {
                          const onResolve = circularDependencyAwaiter.add(
                            item,
                            itemTypeName,
                            subObject,
                            originalPropertyDefinition,
                            executingPromises
                          );
                          const toReturn = await parentSubTraverser(
                            subObject,
                            originalPropertyDefinition,
                            globals as any
                          );
                          onResolve();
                          return toReturn;
                        })
                      );
                    } else {
                      const onResolve = circularDependencyAwaiter.add(
                        item,
                        itemTypeName,
                        originalObject,
                        originalPropertyDefinition,
                        executingPromises
                      );
                      const toReturn = await parentSubTraverser(
                        originalObject,
                        originalPropertyDefinition,
                        globals as any
                      );
                      onResolve();
                      return toReturn;
                    }
                  });
                  return [propertyName, transformedProperty];
                }
              )
            )
          );
          return propertiesReturn;
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
