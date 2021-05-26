import { Schema } from "../shexTypes";
import Transformers from "../Transformers";
import traversePrefixes from "./traversePrefixes";
import traverseSemAct from "./traverseSemAct";
import traverseShapeExpr from "./traverseShapeExpr";
import traverseShapes from "./traverseShapes";

export default async function traverseSchema<
  SchemaReturn,
  prefixesReturn,
  SemActReturn,
  shapeExprReturn,
  shapesReturn,
  ShapeOrReturn,
  ShapeAndReturn,
  ShapeNotReturn,
  ShapeRefReturn,
  NodeConstraintReturn,
  ShapeReturn,
  valueSetValueReturn,
  tripleExprReturn,
  AnnotationReturn,
  EachOfReturn,
  OneOfReturn,
  TripleConstraintReturn,
  ObjectLiteralReturn,
  IriStemReturn,
  IriStemRangeReturn,
  LiteralStemReturn,
  LiteralStemRangeReturn,
  LanguageReturn,
  LanguageStemReturn,
  LanguageStemRangeReturn,
  AnnotationsReturn,
  SemActsReturn
>(
  schema: Schema,
  transformers: Transformers<
    SchemaReturn,
    prefixesReturn,
    SemActReturn,
    shapeExprReturn,
    shapesReturn,
    ShapeOrReturn,
    ShapeAndReturn,
    ShapeNotReturn,
    ShapeRefReturn,
    NodeConstraintReturn,
    ShapeReturn,
    valueSetValueReturn,
    tripleExprReturn,
    AnnotationReturn,
    EachOfReturn,
    OneOfReturn,
    TripleConstraintReturn,
    ObjectLiteralReturn,
    IriStemReturn,
    IriStemRangeReturn,
    LiteralStemReturn,
    LiteralStemRangeReturn,
    LanguageReturn,
    LanguageStemReturn,
    LanguageStemRangeReturn,
    AnnotationsReturn,
    SemActsReturn
  >
): Promise<SchemaReturn> {
  let prefixes: prefixesReturn | undefined;
  let startActs: SemActReturn[] | undefined;
  let start: shapeExprReturn | undefined;
  let shapes: shapesReturn | undefined;

  await Promise.all([
    (async () => {
      if (schema.prefixes) {
        prefixes = await traversePrefixes(schema.prefixes, transformers, [
          {
            parent: schema,
            type: "Schema",
            via: "prefixes",
          },
        ]);
      }
    })(),
    (async () => {
      if (schema.startActs) {
        startActs = await Promise.all(
          schema.startActs.map(async (curSemAct) => {
            return await traverseSemAct(curSemAct, transformers, [
              {
                parent: schema,
                type: "Schema",
                via: "startActs",
              },
            ]);
          })
        );
      }
    })(),
    (async () => {
      if (schema.start) {
        start = await traverseShapeExpr(schema.start, transformers, [
          {
            parent: schema,
            type: "Schema",
            via: "start",
          },
        ]);
      }
    })(),
    (async () => {
      if (schema.shapes) {
        shapes = await traverseShapes(schema.shapes, transformers, [
          {
            parent: schema,
            type: "Schema",
            via: "shapes",
          },
        ]);
      }
    })(),
  ]);

  return await transformers.Schema(schema, {
    prefixes,
    startActs,
    start,
    shapes,
  });
}
