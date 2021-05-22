import { LanguageStemRange } from "../shexTypes";
import Transformers from "../Transformers";
import traverseLanguageStem from "./traverseLanguageStem";

export default async function traverseLanguageStemRange<
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
  languageStemRange: LanguageStemRange,
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
): Promise<LanguageStemRangeReturn> {
  const exclusions: (string | LanguageStemReturn)[] = await Promise.all(
    languageStemRange.exclusions.map(async (curExclusion) => {
      if (typeof curExclusion === "string") {
        return curExclusion;
      }
      return await traverseLanguageStem(curExclusion, transformers);
    })
  );
  return await transformers.LanguageStemRange(languageStemRange, {
    exclusions,
  });
}
