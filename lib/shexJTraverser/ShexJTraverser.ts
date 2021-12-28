import { ShexJTraverserDefinition } from "./ShexJTraverserDefinition";
import { ShexJTraverserTypes } from "./ShexJTraverserTypes";
import { Traverser } from "../typeTraverser/Traverser";

export const ShexJTraverser = new Traverser<ShexJTraverserTypes>(
  ShexJTraverserDefinition
);
