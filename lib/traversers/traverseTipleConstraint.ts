import { TripleConstraint } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseAnnotation from "./traverseAnnotation";
import traverseSemAct from "./traverseSemAct";
import traverseShapeExpr from "./traverseShapeExpr";

export default async function traverseTripleConstraint<
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
  LanguageStemRangeReturn
>(
  tripleConstraint: TripleConstraint,
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
    LanguageStemRangeReturn
  >,
  parentStack: ParentTrace[]
): Promise<TripleConstraintReturn> {
  let valueExpr: shapeExprReturn | undefined;
  let semActs: SemActReturn[] | undefined;
  let annotations: AnnotationReturn[] | undefined;

  await Promise.all([
    (async () => {
      if (tripleConstraint.valueExpr) {
        valueExpr = await traverseShapeExpr(
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
      }
    })(),
    (async () => {
      if (tripleConstraint.semActs) {
        semActs = await Promise.all(
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
      }
    })(),
    (async () => {
      if (tripleConstraint.annotations) {
        annotations = await Promise.all(
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
