/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseReturnType,
  BaseTraverserTypes,
  TransformerReturnTypes,
  TraverserDefinition,
  TraverserTypes,
} from "../..";
import { Transformers } from "../../Transformers";
import { MultiMap } from "./MultiMap";
import { MultiSet } from "./MultiSet";
import { SuperPromise } from "./SuperPromise";

export type SubTraverser<
  Types extends TraverserTypes<any>,
  TypeName extends keyof Types,
  ReturnTypes extends TransformerReturnTypes<Types>,
  Type extends BaseTraverserTypes<keyof Types>,
  ReturnType extends BaseReturnType<Types, TypeName>
> = (
  item: Type["type"],
  itemTypeName: TypeName,
  globals: SubTraverserGlobals<Types, ReturnTypes>
) => Promise<ReturnType["return"]>;

export interface SubTraverserGlobals<
  Types extends TraverserTypes<any>,
  ReturnTypes extends TransformerReturnTypes<Types>
> {
  traverserDefinition: TraverserDefinition<Types>;
  transformers: Transformers<Types, ReturnTypes>;
  visitedObjects: MultiSet<object, keyof Types>;
  executingPromises: MultiMap<object, keyof Types, Promise<any>>;
  superPromise: SuperPromise;
}
