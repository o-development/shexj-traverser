import { ShapeAnd } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseShapeExpr from "./traverseShapeExpr";

export default async function traverseShapeAnd<
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
  shapeAnd: ShapeAnd,
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
): Promise<ShapeAndReturn> {
  const shapeExprs: shapeExprReturn[] = await Promise.all(
    shapeAnd.shapeExprs.map(async (shapeExpr, index) => {
      return await traverseShapeExpr(
        shapeExpr,
        transformers,
        parentStack.concat([
          {
            parent: shapeAnd,
            type: "ShapeAnd",
            via: "shapeExprs",
            viaIndex: index,
          },
        ])
      );
    })
  );
  return await transformers.ShapeAnd(shapeAnd, { shapeExprs }, parentStack);
}
