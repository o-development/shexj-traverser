import { TripleConstraint } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseAnnotation from "./traverseAnnotation";
import traverseAnnotations from "./traverseAnnotations";
import traverseSemAct from "./traverseSemAct";
import traverseSemActs from "./traverseSemActs";
import traverseShapeExpr from "./traverseShapeExpr";

export default async function traverseTripleConstraint<
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
  tripleConstraint: TripleConstraint,
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
): Promise<TripleConstraintReturn> {
  let valueExpr: shapeExprReturn | undefined;
  let semActs: SemActsReturn | undefined;
  let annotations: AnnotationsReturn | undefined;

  await Promise.all([
    (async () => {
      if (tripleConstraint.valueExpr) {
        valueExpr = await traverseShapeExpr(
          tripleConstraint.valueExpr,
          transformers,
          parentStack.concat([
            {
              parent: tripleConstraint,
              type: "TripleConstraint",
              via: "valueExpr",
            },
          ])
        );
      }
    })(),
    (async () => {
      if (tripleConstraint.semActs) {
        semActs = await traverseSemActs(
          tripleConstraint.semActs,
          transformers,
          parentStack.concat({
            parent: tripleConstraint,
            type: "TripleConstraint",
            via: "semActs",
          })
        );
      }
    })(),
    (async () => {
      if (tripleConstraint.annotations) {
        annotations = await traverseAnnotations(
          tripleConstraint.annotations,
          transformers,
          parentStack.concat({
            parent: tripleConstraint,
            type: "TripleConstraint",
            via: "annotations",
          })
        );
      }
    })(),
  ]);

  return await transformers.TripleConstraint(
    tripleConstraint,
    {
      valueExpr,
      semActs,
      annotations,
    },
    parentStack
  );
}
