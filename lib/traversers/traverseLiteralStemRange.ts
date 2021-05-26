import { LiteralStemRange } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseLiteralStem from "./traverseLiteralStem";

export default async function traverseLiteralStemRange<
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
  literalStemRange: LiteralStemRange,
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
  >,
  parentStack: ParentTrace[]
): Promise<LiteralStemRangeReturn> {
  const exclusions: (string | LiteralStemReturn)[] = await Promise.all(
    literalStemRange.exclusions.map(async (curExclusion, index) => {
      if (typeof curExclusion === "string") {
        return curExclusion;
      }
      return await traverseLiteralStem(
        curExclusion,
        transformers,
        parentStack.concat([
          {
            parent: literalStemRange,
            type: "LiteralStemRange",
            via: "exclusions",
            viaIndex: index,
          },
        ])
      );
    })
  );
  return await transformers.LiteralStemRange(
    literalStemRange,
    { exclusions },
    parentStack
  );
}
