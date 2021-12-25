import { IriStemRange } from "shexj";
import Transformers, { ParentTrace } from "../Transformers.type";
import traverseIriStem from "./traverseIriStem";

export default async function traverseIriStemRange<
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
  iriStemRange: IriStemRange,
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
): Promise<IriStemRangeReturn> {
  const transformed: (string | IriStemReturn)[] = await Promise.all(
    iriStemRange.exclusions.map(async (curExclusion, index) => {
      if (typeof curExclusion === "string") {
        return curExclusion;
      }
      return await traverseIriStem(
        curExclusion,
        transformers,
        parentStack.concat([
          {
            parent: iriStemRange,
            type: "IriStemRange",
            via: "exclusions",
            viaIndex: index,
          },
        ])
      );
    })
  );
  const exclusions = await transformers.IriStemRange_exclusions(
    iriStemRange.exclusions,
    transformed,
    parentStack.concat([
      {
        parent: iriStemRange,
        type: "IriStemRange",
        via: "exclusions",
      },
    ])
  );
  return await transformers.IriStemRange(
    iriStemRange,
    { exclusions },
    parentStack
  );
}
