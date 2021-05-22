import {
  IriStem,
  IriStemRange,
  Language,
  LanguageStem,
  LanguageStemRange,
  LiteralStem,
  LiteralStemRange,
  valueSetValue,
} from "../shexTypes";
import Transformers from "../Transformers";
import traverseIriStem from "./traverseIriStem";
import traverseIriStemRange from "./traverseIriStemRange";
import traverseLanguage from "./traverseLanguage";
import traverseLanguageStem from "./traverseLanguageStem";
import traverseLanguageStemRange from "./traverseLanguageStemRange";
import traverseLiteralStem from "./traverseLiteralStem";
import traverseLiteralStemRange from "./traverseLiteralStemRange";
import traverseObjectLiteral from "./traverseObjectLiteral";

export default async function traverseValueSetValue<
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
  valSet: valueSetValue,
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
): Promise<valueSetValueReturn> {
  let transformmedChild:
    | string
    | ObjectLiteralReturn
    | IriStemReturn
    | IriStemRangeReturn
    | LiteralStemReturn
    | LiteralStemRangeReturn
    | LanguageReturn
    | LanguageStemReturn
    | LanguageStemRangeReturn;
  if (typeof valSet === "string") {
    transformmedChild = valSet;
  } else {
    switch (valSet.type) {
      case "ObjectLiteral":
        transformmedChild = await traverseObjectLiteral(valSet, transformers);
        break;
      case "IriStem":
        transformmedChild = await traverseIriStem(
          valSet as IriStem,
          transformers
        );
        break;
      case "IriStemRange":
        transformmedChild = await traverseIriStemRange(
          valSet as IriStemRange,
          transformers
        );
        break;
      case "LiteralStem":
        transformmedChild = await traverseLiteralStem(
          valSet as LiteralStem,
          transformers
        );
        break;
      case "LiteralStemRange":
        transformmedChild = await traverseLiteralStemRange(
          valSet as LiteralStemRange,
          transformers
        );
        break;
      case "Language":
        transformmedChild = await traverseLanguage(
          valSet as Language,
          transformers
        );
        break;
      case "LanguageStem":
        transformmedChild = await traverseLanguageStem(
          valSet as LanguageStem,
          transformers
        );
        break;
      case "LanguageStemRange":
        transformmedChild = await traverseLanguageStemRange(
          valSet as LanguageStemRange,
          transformers
        );
        break;
      default:
        throw new Error("Invalid valueSetValue");
    }
  }
  return transformers.valueSetValue(valSet, transformmedChild);
}
