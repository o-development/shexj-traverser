import { EachOf } from "shexj";
import Transformers, { ParentTrace } from "../Transformers.type";
import traverseAnnotation from "./traverseAnnotation";
import traverseSemAct from "./traverseSemAct";
import traverseTripleExpr from "./traverseTripleExpr";

export default async function traverseEachOf<
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
  eachOf: EachOf,
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
): Promise<EachOfReturn> {
  let expressions: EachOf_expressionsReturn;
  let semActs: EachOf_semActsReturn | undefined;
  let annotations: EachOf_AnnotationsReturn | undefined;

  await Promise.all([
    (async () => {
      const transformed = await Promise.all(
        eachOf.expressions.map(async (curExpr, index) => {
          return await traverseTripleExpr(
            curExpr,
            transformers,
            parentStack.concat([
              {
                parent: eachOf,
                type: "EachOf",
                via: "expressions",
                viaIndex: index,
              },
            ])
          );
        })
      );
      expressions = await transformers.EachOf_expressions(
        eachOf.expressions,
        transformed,
        parentStack.concat([
          {
            parent: eachOf,
            type: "EachOf",
            via: "expressions",
          },
        ])
      );
    })(),
    (async () => {
      if (eachOf.semActs) {
        const transformed = await Promise.all(
          eachOf.semActs.map(async (curSemAct, index) => {
            return await traverseSemAct(
              curSemAct,
              transformers,
              parentStack.concat([
                {
                  parent: eachOf,
                  type: "EachOf",
                  via: "semActs",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        semActs = await transformers.EachOf_semActs(
          eachOf.semActs,
          transformed,
          parentStack.concat([
            {
              parent: eachOf,
              type: "EachOf",
              via: "semActs",
            },
          ])
        );
      }
    })(),
    (async () => {
      if (eachOf.annotations) {
        const transformed = await Promise.all(
          eachOf.annotations.map(async (curAnnotation, index) => {
            return await traverseAnnotation(
              curAnnotation,
              transformers,
              parentStack.concat([
                {
                  parent: eachOf,
                  type: "EachOf",
                  via: "annotations",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        annotations = await transformers.EachOf_Annotations(
          eachOf.annotations,
          transformed,
          parentStack.concat([
            {
              parent: eachOf,
              type: "EachOf",
              via: "annotations",
            },
          ])
        );
      }
    })(),
  ]);

  return await transformers.EachOf(
    eachOf,
    {
      // expressions is defined in promise
      // @ts-ignore
      expressions,
      semActs,
      annotations,
    },
    parentStack
  );
}
