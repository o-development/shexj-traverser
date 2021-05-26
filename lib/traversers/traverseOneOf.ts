import { OneOf } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseAnnotation from "./traverseAnnotation";
import traverseAnnotations from "./traverseAnnotations";
import traverseSemAct from "./traverseSemAct";
import traverseSemActs from "./traverseSemActs";
import traverseTripleExpr from "./traverseTripleExpr";

export default async function traverseOneOf<
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
  oneOf: OneOf,
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
): Promise<OneOfReturn> {
  let expressions: tripleExprReturn[] = [];
  let semActs: SemActsReturn | undefined;
  let annotations: AnnotationsReturn | undefined;

  await Promise.all([
    (async () => {
      expressions = await Promise.all(
        oneOf.expressions.map(async (curExpr, index) => {
          return await traverseTripleExpr(
            curExpr,
            transformers,
            parentStack.concat([
              {
                parent: oneOf,
                type: "OneOf",
                via: "expressions",
                viaIndex: index,
              },
            ])
          );
        })
      );
    })(),
    (async () => {
      if (oneOf.semActs) {
        semActs = await traverseSemActs(
          oneOf.semActs,
          transformers,
          parentStack.concat([
            {
              parent: oneOf,
              type: "OneOf",
              via: "semActs",
            },
          ])
        );
      }
    })(),
    (async () => {
      if (oneOf.annotations) {
        annotations = await traverseAnnotations(
          oneOf.annotations,
          transformers,
          parentStack.concat([
            {
              parent: oneOf,
              type: "OneOf",
              via: "annotations",
            },
          ])
        );
      }
    })(),
  ]);

  return await transformers.OneOf(
    oneOf,
    {
      expressions,
      semActs,
      annotations,
    },
    parentStack
  );
}
