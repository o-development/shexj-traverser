import { TripleConstraint } from "shexj";
import Transformers, { ParentTrace } from "../Transformers.type";
import traverseAnnotation from "./traverseAnnotation";
import traverseSemAct from "./traverseSemAct";
import traverseShapeExpr from "./traverseShapeExpr";

export default async function traverseTripleConstraint<
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
  tripleConstraint: TripleConstraint,
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
  >,
  parentStack: ParentTrace[]
): Promise<TripleConstraintReturn> {
  let valueExpr: TripleConstraint_valueExprReturn | undefined;
  let semActs: TripleConstraint_semActsReturn | undefined;
  let annotations: TripleConstraint_AnnotationsReturn | undefined;

  await Promise.all([
    (async () => {
      if (tripleConstraint.valueExpr) {
        const transformed = await traverseShapeExpr(
          tripleConstraint.valueExpr,
          transformers,
          parentStack.concat([
            {
              parent: tripleConstraint,
              type: "TripleConstraint",
              via: "valueExpr",
            },
          ])
        );
        valueExpr = await transformers.TripleConstraint_valueExpr(
          tripleConstraint.valueExpr,
          transformed,
          parentStack.concat([
            {
              parent: tripleConstraint,
              type: "TripleConstraint",
              via: "valueExpr",
            },
          ])
        );
      }
    })(),
    (async () => {
      if (tripleConstraint.semActs) {
        const transformed = await Promise.all(
          tripleConstraint.semActs.map(async (curSemAct, index) => {
            return await traverseSemAct(
              curSemAct,
              transformers,
              parentStack.concat([
                {
                  parent: tripleConstraint,
                  type: "TripleConstraint",
                  via: "semActs",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        semActs = await transformers.TripleConstraint_semActs(
          tripleConstraint.semActs,
          transformed,
          parentStack.concat([
            {
              parent: tripleConstraint,
              type: "TripleConstraint",
              via: "semActs",
            },
          ])
        );
      }
    })(),
    (async () => {
      if (tripleConstraint.annotations) {
        const transformed = await Promise.all(
          tripleConstraint.annotations.map(async (curAnnotation, index) => {
            return await traverseAnnotation(
              curAnnotation,
              transformers,
              parentStack.concat([
                {
                  parent: tripleConstraint,
                  type: "TripleConstraint",
                  via: "annotations",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        annotations = await transformers.TripleConstraint_Annotations(
          tripleConstraint.annotations,
          transformed,
          parentStack.concat([
            {
              parent: tripleConstraint,
              type: "TripleConstraint",
              via: "annotations",
            },
          ])
        );
      }
    })(),
  ]);

  return await transformers.TripleConstraint(
    tripleConstraint,
    {
      valueExpr,
      semActs,
      annotations,
    },
    parentStack
  );
}
