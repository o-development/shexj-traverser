import { LanguageStem } from "../shexTypes";
import Transformers from "../Transformers";

export default async function traverseLanguageStem<
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
  languageStem: LanguageStem,
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
): Promise<LanguageStemReturn> {
  return transformers.LanguageStem(languageStem);
}
