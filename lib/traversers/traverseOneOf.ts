import { OneOf } from "shexj";
import Transformers, { ParentTrace } from "../Transformers.type";
import traverseAnnotation from "./traverseAnnotation";
import traverseSemAct from "./traverseSemAct";
import traverseTripleExpr from "./traverseTripleExpr";

export default async function traverseOneOf<
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
  oneOf: OneOf,
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
): Promise<OneOfReturn> {
  let expressions: OneOf_expressionsReturn;
  let semActs: OneOf_semActsReturn | undefined;
  let annotations: OneOf_AnnotationsReturn | undefined;

  await Promise.all([
    (async () => {
      const transformed = await Promise.all(
        oneOf.expressions.map(async (curExpr, index) => {
          return await traverseTripleExpr(
            curExpr,
            transformers,
            parentStack.concat([
              {
                parent: oneOf,
                type: "OneOf",
                via: "expressions",
                viaIndex: index,
              },
            ])
          );
        })
      );
      expressions = await transformers.OneOf_expressions(
        oneOf.expressions,
        transformed,
        parentStack.concat([
          {
            parent: oneOf,
            type: "OneOf",
            via: "expressions",
          },
        ])
      );
    })(),
    (async () => {
      if (oneOf.semActs) {
        const transformed = await Promise.all(
          oneOf.semActs.map(async (curSemAct, index) => {
            return await traverseSemAct(
              curSemAct,
              transformers,
              parentStack.concat([
                {
                  parent: oneOf,
                  type: "OneOf",
                  via: "semActs",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        semActs = await transformers.OneOf_semActs(
          oneOf.semActs,
          transformed,
          parentStack.concat([
            {
              parent: oneOf,
              type: "OneOf",
              via: "semActs",
            },
          ])
        );
      }
    })(),
    (async () => {
      if (oneOf.annotations) {
        const transformed = await Promise.all(
          oneOf.annotations.map(async (curAnnotation, index) => {
            return await traverseAnnotation(
              curAnnotation,
              transformers,
              parentStack.concat([
                {
                  parent: oneOf,
                  type: "OneOf",
                  via: "annotations",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        annotations = await transformers.OneOf_Annotations(
          oneOf.annotations,
          transformed,
          parentStack.concat([
            {
              parent: oneOf,
              type: "OneOf",
              via: "annotations",
            },
          ])
        );
      }
    })(),
  ]);

  return await transformers.OneOf(
    oneOf,
    {
      // Expressions is defined in Promise
      // @ts-ignore
      expressions,
      semActs,
      annotations,
    },
    parentStack
  );
}
