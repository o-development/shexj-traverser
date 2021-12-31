/* eslint-disable @typescript-eslint/no-explicit-any */
import { TraverserTypes } from "../";
import {
  InterfaceReturnType,
  TransformerReturnTypes,
} from "../TransformerReturnTypes";
import { InterfaceTransformerDefinition, Transformers } from "../Transformers";
import {
  InterfaceTraverserDefinition,
  TraverserDefinition,
} from "../TraverserDefinition";
import { InterfaceType } from "../TraverserTypes";
import { parentSubTraverser } from "./ParentSubTraverser";

export async function interfaceSubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends InterfaceType<keyof Types>,
  ReturnType extends InterfaceReturnType<Type>
>(
  item: Type["type"],
  itemTypeName: TypeName,
  globals: {
    traverserDefinition: TraverserDefinition<Types>;
    transformers: Transformers<Types, ReturnTypes>;
    visitedObjects: WeakSet<object>;
  }
): Promise<ReturnType["return"]> {
  const { traverserDefinition, transformers } = globals;
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
  const propertiesReturn: ReturnType["properties"] = Object.fromEntries(
    await Promise.all(
      Object.entries(definition.properties).map(async ([propertyName]) => {
        const originalObject = item[propertyName];
        const originalPropertyDefinition = definition.properties[propertyName];
        let transformedProperty;
        if (originalObject === undefined) {
          transformedProperty = undefined;
        } else if (Array.isArray(originalObject)) {
          transformedProperty = await Promise.all(
            originalObject.map(async (subObject) => {
              return parentSubTraverser(
                subObject,
                originalPropertyDefinition.typeName,
                globals
              );
            })
          );
        } else {
          transformedProperty = await parentSubTraverser(
            originalObject,
            originalPropertyDefinition.typeName,
            globals
          );
        }
        transformedProperty = await transformer.properties[propertyName](
          originalObject,
          transformedProperty
        );
        return [propertyName, transformedProperty];
      })
    )
  );
  return transformer.transformer(item, propertiesReturn);
}
