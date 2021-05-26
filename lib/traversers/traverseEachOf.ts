import { EachOf } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseTripleExpr from "./traverseTripleExpr";
import traverseSemActs from "./traverseSemActs";
import traverseAnnotations from "./traverseAnnotations";

export default async function traverseEachOf<
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
  eachOf: EachOf,
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
): Promise<EachOfReturn> {
  let expressions: tripleExprReturn[] = [];
  let semActs: SemActsReturn | undefined;
  let annotations: AnnotationsReturn | undefined;

  await Promise.all([
    (async () => {
      expressions = await Promise.all(
        eachOf.expressions.map(async (curExpr, index) => {
          return await traverseTripleExpr(
            curExpr,
            transformers,
            parentStack.concat([
              {
                parent: eachOf,
                type: "EachOf",
                via: "expressions",
                viaIndex: index,
              },
            ])
          );
        })
      );
    })(),
    (async () => {
      if (eachOf.semActs) {
        semActs = await traverseSemActs(
          eachOf.semActs,
          transformers,
          parentStack.concat({
            parent: eachOf,
            type: "EachOf",
            via: "semActs",
          })
        );
      }
    })(),
    (async () => {
      if (eachOf.annotations) {
        annotations = await traverseAnnotations(
          eachOf.annotations,
          transformers,
          parentStack.concat({
            parent: eachOf,
            type: "EachOf",
            via: "annotations",
          })
        );
      }
    })(),
  ]);

  return await transformers.EachOf(
    eachOf,
    {
      expressions,
      semActs,
      annotations,
    },
    parentStack
  );
}
