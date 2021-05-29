import {
  IriStem,
  IriStemRange,
  Language,
  LanguageStem,
  LanguageStemRange,
  LiteralStem,
  LiteralStemRange,
  valueSetValue,
  ObjectLiteral,
} from "shexj";
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
  valSet: valueSetValue,
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
        if ((valSet as ObjectLiteral).value) {
          transformmedChild = await traverseObjectLiteral(
            valSet as ObjectLiteral,
            transformers,
            parentStack
          );
        } else {
          throw new Error(`Invalid ValSetValue: ${valSet}`);
        }
    }
  }
  return transformers.valueSetValue(valSet, transformmedChild, parentStack);
}
