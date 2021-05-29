import { Schema } from "shexj";
import Transformers from "../Transformers";
import traverseSemAct from "./traverseSemAct";
import traverseShapeExpr from "./traverseShapeExpr";

export default async function traverseSchema<
  SchemaReturn,
  ShapeOrReturn,
  ShapeAndReturn,
  ShapeNotReturn,
  ShapeExternalReturn,
  NodeConstraintReturn,
  ObjectLiteralReturn,
  IriStemReturn,
  IriStemRangeReturn,
  LiteralStemReturn,
  LiteralStemRangeReturn,
  LanguageReturn,
  LanguageStemReturn,
  LanguageStemRangeReturn,
  WildcardReturn,
  ShapeReturn,
  EachOfReturn,
  OneOfReturn,
  TripleConstraintReturn,
  SemActReturn,
  AnnotationReturn,
  shapeExprReturn,
  valueSetValueReturn,
  tripleExprReturn,
  Schema_startActsReturn,
  Schema_startReturn,
  Schema_shapesReturn,
  ShapeOr_shapeExprsReturn,
  ShapeAnd_shapeExprsReturn,
  ShapeNot_shapeExprReturn,
  NodeConstraint_valuesReturn,
  IriStemRange_exclusionsReturn,
  LiteralStemRange_exclusionsReturn,
  LanguageStemRange_exclusionsReturn,
  Shape_expressionReturn,
  Shape_semActsReturn,
  Shape_AnnotationsReturn,
  EachOf_expressionsReturn,
  EachOf_semActsReturn,
  EachOf_AnnotationsReturn,
  OneOf_expressionsReturn,
  OneOf_semActsReturn,
  OneOf_AnnotationsReturn,
  TripleConstraint_valueExprReturn,
  TripleConstraint_semActsReturn,
  TripleConstraint_AnnotationsReturn
>(
  schema: Schema,
  transformers: Transformers<
    SchemaReturn,
    ShapeOrReturn,
    ShapeAndReturn,
    ShapeNotReturn,
    ShapeExternalReturn,
    NodeConstraintReturn,
    ObjectLiteralReturn,
    IriStemReturn,
    IriStemRangeReturn,
    LiteralStemReturn,
    LiteralStemRangeReturn,
    LanguageReturn,
    LanguageStemReturn,
    LanguageStemRangeReturn,
    WildcardReturn,
    ShapeReturn,
    EachOfReturn,
    OneOfReturn,
    TripleConstraintReturn,
    SemActReturn,
    AnnotationReturn,
    shapeExprReturn,
    valueSetValueReturn,
    tripleExprReturn,
    Schema_startActsReturn,
    Schema_startReturn,
    Schema_shapesReturn,
    ShapeOr_shapeExprsReturn,
    ShapeAnd_shapeExprsReturn,
    ShapeNot_shapeExprReturn,
    NodeConstraint_valuesReturn,
    IriStemRange_exclusionsReturn,
    LiteralStemRange_exclusionsReturn,
    LanguageStemRange_exclusionsReturn,
    Shape_expressionReturn,
    Shape_semActsReturn,
    Shape_AnnotationsReturn,
    EachOf_expressionsReturn,
    EachOf_semActsReturn,
    EachOf_AnnotationsReturn,
    OneOf_expressionsReturn,
    OneOf_semActsReturn,
    OneOf_AnnotationsReturn,
    TripleConstraint_valueExprReturn,
    TripleConstraint_semActsReturn,
    TripleConstraint_AnnotationsReturn
  >
): Promise<SchemaReturn> {
  let startActs: Schema_startActsReturn | undefined;
  let start: Schema_startReturn | undefined;
  let shapes: Schema_shapesReturn | undefined;

  await Promise.all([
    (async () => {
      if (schema.startActs) {
        const transfromedStartActs = await Promise.all(
          schema.startActs.map(async (curSemAct, index) => {
            return await traverseSemAct(curSemAct, transformers, [
              {
                parent: schema,
                type: "Schema",
                via: "startActs",
                viaIndex: index,
              },
            ]);
          })
        );
        startActs = await transformers.Schema_startActs(
          schema.startActs,
          transfromedStartActs,
          [
            {
              parent: schema,
              type: "Schema",
              via: "startActs",
            },
          ]
        );
      }
    })(),
    (async () => {
      if (schema.start) {
        const transformed = await traverseShapeExpr(
          schema.start,
          transformers,
          [
            {
              parent: schema,
              type: "Schema",
              via: "start",
            },
          ]
        );
        start = await transformers.Schema_start(schema.start, transformed, [
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
        const transformed = await Promise.all(
          schema.shapes.map(async (shape, index) => {
            return await traverseShapeExpr(shape, transformers, [
              {
                parent: schema,
                type: "Schema",
                via: "shapes",
                viaIndex: index,
              },
            ]);
          })
        );
        shapes = await transformers.Schema_shapes(schema.shapes, transformed, [
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
    startActs,
    start,
    shapes,
  });
}
