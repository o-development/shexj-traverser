import { Annotation, SemAct } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseSemAct from "./traverseSemAct";

export default async function traverseSemActs<
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
  semActs: SemAct[],
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
): Promise<SemActsReturn> {
  const transformmedChildren = await Promise.all(semActs.map(async (semAct, index) => {
    return await traverseSemAct(semAct, transformers, parentStack.concat([{
      parent: semAct,
      type: "SemActs",
      viaIndex: index
    }]));
  }));
  return await transformers.SemActs(semActs, transformmedChildren, parentStack);
}
