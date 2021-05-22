import { tripleExpr } from "../shexTypes";
import Transformers from "../Transformers";
import traverseEachOf from "./traverseEachOf";
import traverseOneOf from "./traverseOneOf";
import traverseTripleConstraint from "./traverseTipleConstraint";

export default async function traverseTripleExpr<
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
  expr: tripleExpr,
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
): Promise<tripleExprReturn> {
  let transformmedChild:
    | string
    | EachOfReturn
    | OneOfReturn
    | TripleConstraintReturn;
  if (typeof expr === "string") {
    transformmedChild = expr;
  } else {
    switch (expr.type) {
      case "EachOf":
        transformmedChild = await traverseEachOf(expr, transformers);
        break;
      case "OneOf":
        transformmedChild = await traverseOneOf(expr, transformers);
        break;
      case "TripleConstraint":
        transformmedChild = await traverseTripleConstraint(expr, transformers);
        break;
    }
  }
  return await transformers.tripleExpr(expr, transformmedChild);
}
