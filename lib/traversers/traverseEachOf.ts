import { EachOf } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseAnnotation from "./traverseAnnotation";
import traverseSemAct from "./traverseSemAct";
import traverseTripleExpr from "./traverseTripleExpr";

export default async function traverseEachOf<
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
  eachOf: EachOf,
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
): Promise<EachOfReturn> {
  let expressions: tripleExprReturn[] = [];
  let semActs: SemActReturn[] | undefined;
  let annotations: AnnotationReturn[] | undefined;

  await Promise.all([
    (async () => {
      expressions = await Promise.all(
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
    })(),
    (async () => {
      if (eachOf.semActs) {
        semActs = await Promise.all(
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
      }
    })(),
    (async () => {
      if (eachOf.annotations) {
        annotations = await Promise.all(
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
      }
    })(),
  ]);

  return await transformers.EachOf(
    eachOf,
    {
      expressions,
      semActs,
      annotations,
    },
    parentStack
  );
}
