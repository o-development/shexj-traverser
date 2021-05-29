import { Shape } from "shexj";
import Transformers, { ParentTrace } from "../Transformers";
import traverseTripleExpr from "./traverseTripleExpr";
import traverseSemAct from "./traverseSemAct";
import traverseAnnotation from "./traverseAnnotation";

export default async function traverseShape<
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
  shape: Shape,
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
): Promise<ShapeReturn> {
  let expression: Shape_expressionReturn | undefined;
  let semActs: Shape_semActsReturn | undefined;
  let annotations: Shape_AnnotationsReturn | undefined;

  await Promise.all([
    (async () => {
      if (shape.expression) {
        const transformed = await traverseTripleExpr(
          shape.expression,
          transformers,
          parentStack.concat([
            {
              parent: shape,
              type: "Shape",
              via: "expression",
            },
          ])
        );
        expression = await transformers.Shape_expression(
          shape.expression,
          transformed,
          parentStack.concat({
            parent: shape,
            type: "Shape",
            via: "expression",
          })
        );
      }
    })(),
    (async () => {
      if (shape.semActs) {
        const transformed = await Promise.all(
          shape.semActs.map(async (curSemAct, index) => {
            return await traverseSemAct(
              curSemAct,
              transformers,
              parentStack.concat([
                {
                  parent: shape,
                  type: "Shape",
                  via: "semActs",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        semActs = await transformers.Shape_semActs(
          shape.semActs,
          transformed,
          parentStack.concat([
            {
              parent: shape,
              type: "Shape",
              via: "semActs",
            },
          ])
        );
      }
    })(),
    (async () => {
      if (shape.annotations) {
        const transformed = await Promise.all(
          shape.annotations.map(async (curAnnotation, index) => {
            return await traverseAnnotation(
              curAnnotation,
              transformers,
              parentStack.concat([
                {
                  parent: shape,
                  type: "Shape",
                  via: "annotations",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        annotations = await transformers.Shape_Annotations(
          shape.annotations,
          transformed,
          parentStack.concat([
            {
              parent: shape,
              type: "Shape",
              via: "annotations",
            },
          ])
        );
      }
    })(),
  ]);

  return await transformers.Shape(
    shape,
    {
      expression,
      semActs,
      annotations,
    },
    parentStack
  );
}
