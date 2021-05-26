import { Shape } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseSemAct from "./traverseSemAct";
import traverseTripleExpr from "./traverseTripleExpr";
import traverseAnnotation from "./traverseAnnotation";

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
  LanguageStemRangeReturn
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
    LanguageStemRangeReturn
  >,
  parentStack: ParentTrace[]
): Promise<ShapeReturn> {
  let expression: tripleExprReturn | undefined;
  let semActs: SemActReturn[] | undefined;
  let annotations: AnnotationReturn[] | undefined;

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
        semActs = await Promise.all(
          shape.semActs.map(async (curSemAct, index) => {
            return await traverseSemAct(
              curSemAct,
              transformers,
              parentStack.concat([
                {
                  parent: shape,
                  type: "Shape",
                  via: "semActs",
                  viaIndex: index,
                },
              ])
            );
          })
        );
      }
    })(),
    (async () => {
      if (shape.annotations) {
        annotations = await Promise.all(
          shape.annotations.map(async (curAnnotation, index) => {
            return await traverseAnnotation(
              curAnnotation,
              transformers,
              parentStack.concat([
                {
                  parent: shape,
                  type: "Shape",
                  via: "semActs",
                  viaIndex: index,
                },
              ])
            );
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
