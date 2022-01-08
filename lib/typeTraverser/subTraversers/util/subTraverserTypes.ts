/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseReturnType,
  BaseTraverserTypes,
  KeyTypes,
  TransformerReturnTypes,
  TraverserDefinition,
  TraverserTypes,
} from "../..";
import { Transformers } from "../../Transformers";
import { CircularDepenedencyAwaiter } from "./CircularDependencyAwaiter";
import { MultiMap } from "./MultiMap";
import { MultiSet } from "./MultiSet";

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
  executingPromises: SubTraverserExecutingPromises<keyof Types>;
  circularDependencyAwaiter: CircularDepenedencyAwaiter;
}

export type SubTraverserExecutingPromises<Keys extends KeyTypes = KeyTypes> =
  MultiMap<object, Keys, { promise: Promise<any>; isResolved: boolean }>;
