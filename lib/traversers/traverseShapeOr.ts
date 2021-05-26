import { ShapeOr } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseShapeExpr from "./traverseShapeExpr";

export default async function traverseShapeOr<
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
  shapeOr: ShapeOr,
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
): Promise<ShapeOrReturn> {
  const shapeExprs: shapeExprReturn[] = await Promise.all(
    shapeOr.shapeExprs.map(async (shapeExpr, index) => {
      return await traverseShapeExpr(shapeExpr, transformers, parentStack.concat([{
        parent: shapeOr,
        type: "ShapeOr",
        via: "shapeExprs",
        viaIndex: index
      }]));
    })
  );
  return await transformers.ShapeOr(shapeOr, { shapeExprs }, parentStack);
}
