import { IriStemRange } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseIriStem from "./traverseIriStem";

export default async function traverseIriStemRange<
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
  iriStemRange: IriStemRange,
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
): Promise<IriStemRangeReturn> {
  const exclusions: (string | IriStemReturn)[] = await Promise.all(
    iriStemRange.exclusions.map(async (curExclusion, index) => {
      if (typeof curExclusion === "string") {
        return curExclusion;
      }
      return await traverseIriStem(curExclusion, transformers, parentStack.concat([{
        parent: iriStemRange,
        type: "IriStemRange",
        via: "exclusions",
        viaIndex: index,
      }]));
    })
  );
  return await transformers.IriStemRange(iriStemRange, { exclusions }, parentStack);
}
