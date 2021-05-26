import { LanguageStemRange } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
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
  LanguageStemRangeReturn,
  AnnotationsReturn,
  SemActsReturn
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
    LanguageStemRangeReturn,
    AnnotationsReturn,
    SemActsReturn
  >,
  parentStack: ParentTrace[]
): Promise<LanguageStemRangeReturn> {
  const exclusions: (string | LanguageStemReturn)[] = await Promise.all(
    languageStemRange.exclusions.map(async (curExclusion, index) => {
      if (typeof curExclusion === "string") {
        return curExclusion;
      }
      return await traverseLanguageStem(
        curExclusion,
        transformers,
        parentStack.concat([
          {
            parent: languageStemRange,
            type: "LanguageStemRange",
            via: "exclusions",
            viaIndex: index,
          },
        ])
      );
    })
  );
  return await transformers.LanguageStemRange(
    languageStemRange,
    {
      exclusions,
    },
    parentStack
  );
}
