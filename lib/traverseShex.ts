import Transformers, { TransformersReturns } from "./Transformers";
import { Schema } from "shexj";
import traverseSchema from "./traversers/traverseSchema";
import defaultTransformers from "./defaultTransformers";

export default function traverseShex<Returns extends TransformersReturns>(
  shexSchema: Schema,
  transformers: Partial<Transformers<Returns>>
) {
  const combinedTransformers: Transformers<Returns> = Object.assign(
    defaultTransformers,
    transformers
  );
  return traverseSchema(shexSchema, combinedTransformers);
}
