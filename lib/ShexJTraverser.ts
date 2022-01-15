import { ShexJTraverserDefinition } from "./ShexJTraverserDefinition";
import { ShexJTraverserTypes } from "./ShexJTraverserTypes";
import { Traverser } from "type-traverser";

export const ShexJTraverser = new Traverser<ShexJTraverserTypes>(
  ShexJTraverserDefinition
);
