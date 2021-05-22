import { shapeExpr } from "../shexTypes";
import Transformers from "../Transformers";
import traverseNodeConstraint from "./traverseNodeConstraint";
import traverseShape from "./traverseShape";
import traverseShapeAnd from "./traverseShapeAnd";
import traverseShapeNot from "./traverseShapeNot";
import traverseShapeOr from "./traverseShapeOr";
import traverseShapeRef from "./traverseShapeRef";

export default async function traverseShapeExpr<
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
  expr: shapeExpr,
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
  >
): Promise<shapeExprReturn> {
  let transformmedChild:
    | string
    | ShapeOrReturn
    | ShapeAndReturn
    | ShapeNotReturn
    | NodeConstraintReturn
    | ShapeReturn
    | ShapeRefReturn;
  if (typeof expr === "string") {
    transformmedChild = expr;
  } else {
    switch (expr.type) {
      case "ShapeOr":
        transformmedChild = await traverseShapeOr(expr, transformers);
        break;
      case "ShapeAnd":
        transformmedChild = await traverseShapeAnd(expr, transformers);
        break;
      case "ShapeNot":
        transformmedChild = await traverseShapeNot(expr, transformers);
        break;
      case "NodeConstraint":
        transformmedChild = await traverseNodeConstraint(expr, transformers);
        break;
      case "Shape":
        transformmedChild = await traverseShape(expr, transformers);
        break;
      case "ShapeRef":
        transformmedChild = await traverseShapeRef(expr, transformers);
        break;
    }
  }
  return await transformers.shapeExpr(expr, transformmedChild);
}
