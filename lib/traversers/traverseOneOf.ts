import { OneOf } from "../shexTypes";
import Transformers from "../Transformers";
import traverseAnnotation from "./traverseAnnotation";
import traverseSemAct from "./traverseSemAct";
import traverseTripleExpr from "./traverseTripleExpr";

export default async function traverseOneOf<
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
  oneOf: OneOf,
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
  >
): Promise<OneOfReturn> {
  let expressions: tripleExprReturn[] = [];
  let semActs: SemActReturn[] | undefined;
  let annotations: AnnotationReturn[] | undefined;

  await Promise.all([
    (async () => {
      expressions = await Promise.all(
        oneOf.expressions.map(async (curExpr) => {
          return await traverseTripleExpr(curExpr, transformers);
        })
      );
    })(),
    (async () => {
      if (oneOf.semActs) {
        semActs = await Promise.all(
          oneOf.semActs.map(async (curSemAct) => {
            return await traverseSemAct(curSemAct, transformers);
          })
        );
      }
    })(),
    (async () => {
      if (oneOf.annotations) {
        annotations = await Promise.all(
          oneOf.annotations.map(async (curAnnotation) => {
            return await traverseAnnotation(curAnnotation, transformers);
          })
        );
      }
    })(),
  ]);

  return await transformers.OneOf(oneOf, {
    expressions,
    semActs,
    annotations,
  });
}
