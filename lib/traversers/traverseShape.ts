import { Shape } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseTripleExpr from "./traverseTripleExpr";
import traverseSemActs from "./traverseSemActs";
import traverseAnnotations from "./traverseAnnotations";

export default async function traverseShape<
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
  shape: Shape,
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
): Promise<ShapeReturn> {
  let expression: tripleExprReturn | undefined;
  let semActs: SemActsReturn | undefined;
  let annotations: AnnotationsReturn | undefined;

  await Promise.all([
    (async () => {
      if (shape.expression) {
        expression = await traverseTripleExpr(
          shape.expression,
          transformers,
          parentStack.concat([
            {
              parent: shape,
              type: "Shape",
              via: "expression",
            },
          ])
        );
      }
    })(),
    (async () => {
      if (shape.semActs) {
        semActs = await traverseSemActs(
          shape.semActs,
          transformers,
          parentStack.concat({
            parent: shape,
            type: "Shape",
            via: "semActs",
          })
        );
      }
    })(),
    (async () => {
      if (shape.annotations) {
        annotations = await traverseAnnotations(
          shape.annotations,
          transformers,
          parentStack.concat({
            parent: shape,
            type: "Shape",
            via: "annotations",
          })
        );
      }
    })(),
  ]);

  return await transformers.Shape(
    shape,
    {
      expression,
      semActs,
      annotations,
    },
    parentStack
  );
}
