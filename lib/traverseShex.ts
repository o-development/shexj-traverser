import Transformers from "./Transformers";
import {
  Annotation,
  EachOf,
  IRIREF,
  IriStem,
  IriStemRange,
  LANGTAG,
  Language,
  LanguageStem,
  LanguageStemRange,
  LiteralStem,
  LiteralStemRange,
  NodeConstraint,
  ObjectLiteral,
  OneOf,
  Schema,
  SemAct,
  Shape,
  ShapeAnd,
  shapeExprRef,
  ShapeExternal,
  ShapeNot,
  ShapeOr,
  STRING,
  TripleConstraint,
  tripleExprRef,
  Wildcard,
} from "shexj";
import traverseSchema from "./traversers/traverseSchema";
import defaultTransformers from "./defaultTransformers";

export default function traverseShex<
  // Base Return value generics
  SchemaReturn = Schema,
  ShapeOrReturn = ShapeOr,
  ShapeAndReturn = ShapeAnd,
  ShapeNotReturn = ShapeNot,
  ShapeExternalReturn = ShapeExternal,
  NodeConstraintReturn = NodeConstraint,
  ObjectLiteralReturn = ObjectLiteral,
  IriStemReturn = IriStem,
  IriStemRangeReturn = IriStemRange,
  LiteralStemReturn = LiteralStem,
  LiteralStemRangeReturn = LiteralStemRange,
  LanguageReturn = Language,
  LanguageStemReturn = LanguageStem,
  LanguageStemRangeReturn = LanguageStemRange,
  WildcardReturn = Wildcard,
  ShapeReturn = Shape,
  EachOfReturn = EachOf,
  OneOfReturn = OneOf,
  TripleConstraintReturn = TripleConstraint,
  SemActReturn = SemAct,
  AnnotationReturn = Annotation,
  // Return types for constructed types
  shapeExprReturn =
    | ShapeOrReturn
    | ShapeAndReturn
    | ShapeNotReturn
    | NodeConstraintReturn
    | ShapeReturn
    | ShapeExternalReturn
    | shapeExprRef,
  valueSetValueReturn =
    | IRIREF
    | ObjectLiteralReturn
    | IriStemReturn
    | IriStemRangeReturn
    | LiteralStemReturn
    | LiteralStemRangeReturn
    | LanguageReturn
    | LanguageStemReturn
    | LanguageStemRangeReturn,
  tripleExprReturn =
    | EachOfReturn
    | OneOfReturn
    | TripleConstraintReturn
    | tripleExprRef,
  // Return specific field values
  Schema_startActsReturn = SemActReturn[],
  Schema_startReturn = shapeExprReturn,
  Schema_shapesReturn = shapeExprReturn[],
  ShapeOr_shapeExprsReturn = shapeExprReturn[],
  ShapeAnd_shapeExprsReturn = shapeExprReturn[],
  ShapeNot_shapeExprReturn = shapeExprReturn,
  NodeConstraint_valuesReturn = valueSetValueReturn[],
  IriStemRange_exclusionsReturn = (IRIREF | IriStemReturn)[],
  LiteralStemRange_exclusionsReturn = (STRING | LiteralStemReturn)[],
  LanguageStemRange_exclusionsReturn = (LANGTAG | LanguageStemReturn)[],
  Shape_expressionReturn = tripleExprReturn,
  Shape_semActsReturn = SemActReturn[],
  Shape_AnnotationsReturn = AnnotationReturn[],
  EachOf_expressionsReturn = tripleExprReturn[],
  EachOf_semActsReturn = SemActReturn[],
  EachOf_AnnotationsReturn = AnnotationReturn[],
  OneOf_expressionsReturn = tripleExprReturn[],
  OneOf_semActsReturn = SemActReturn[],
  OneOf_AnnotationsReturn = AnnotationReturn[],
  TripleConstraint_valueExprReturn = shapeExprReturn,
  TripleConstraint_semActsReturn = SemActReturn[],
  TripleConstraint_AnnotationsReturn = AnnotationReturn[]
>(
  shexSchema: Schema,
  transformers: Partial<
    Transformers<
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
    >
  >
) {
  const combinedTransformers: Transformers<
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
  > = Object.assign(defaultTransformers, transformers);
  return traverseSchema(shexSchema, combinedTransformers);
}
