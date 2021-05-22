import { TripleConstraint } from "../shexTypes";
import Transformers from "../Transformers";
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
  >
): Promise<TripleConstraintReturn> {
  let valueExpr: shapeExprReturn | undefined;
  let semActs: SemActReturn[] | undefined;
  let annotations: AnnotationReturn[] | undefined;

  await Promise.all([
    (async () => {
      if (tripleConstraint.valueExpr) {
        valueExpr = await traverseShapeExpr(tripleConstraint.valueExpr, transformers);
      }
    })(),
    (async () => {
      if (tripleConstraint.semActs) {
        semActs = await Promise.all(
          tripleConstraint.semActs.map(async (curSemAct) => {
            return await traverseSemAct(curSemAct, transformers);
          })
        );
      }
    })(),
    (async () => {
      if (tripleConstraint.annotations) {
        annotations = await Promise.all(
          tripleConstraint.annotations.map(async (curAnnotation) => {
            return await traverseAnnotation(curAnnotation, transformers);
          })
        );
      }
    })(),
  ]);

  return await transformers.TripleConstraint(tripleConstraint, {
    valueExpr,
    semActs,
    annotations,
  });
}
