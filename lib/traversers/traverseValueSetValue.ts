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
import Transformers, { ParentTrace } from "../Transformers";
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
  LanguageStemRangeReturn,
  AnnotationsReturn,
  SemActsReturn
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
    LanguageStemRangeReturn,
    AnnotationsReturn,
    SemActsReturn
  >,
  parentStack: ParentTrace[]
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
        transformmedChild = await traverseObjectLiteral(
          valSet,
          transformers,
          parentStack
        );
        break;
      case "IriStem":
        transformmedChild = await traverseIriStem(
          valSet as IriStem,
          transformers,
          parentStack
        );
        break;
      case "IriStemRange":
        transformmedChild = await traverseIriStemRange(
          valSet as IriStemRange,
          transformers,
          parentStack
        );
        break;
      case "LiteralStem":
        transformmedChild = await traverseLiteralStem(
          valSet as LiteralStem,
          transformers,
          parentStack
        );
        break;
      case "LiteralStemRange":
        transformmedChild = await traverseLiteralStemRange(
          valSet as LiteralStemRange,
          transformers,
          parentStack
        );
        break;
      case "Language":
        transformmedChild = await traverseLanguage(
          valSet as Language,
          transformers,
          parentStack
        );
        break;
      case "LanguageStem":
        transformmedChild = await traverseLanguageStem(
          valSet as LanguageStem,
          transformers,
          parentStack
        );
        break;
      case "LanguageStemRange":
        transformmedChild = await traverseLanguageStemRange(
          valSet as LanguageStemRange,
          transformers,
          parentStack
        );
        break;
      default:
        throw new Error("Invalid valueSetValue");
    }
  }
  return transformers.valueSetValue(valSet, transformmedChild, parentStack);
}
