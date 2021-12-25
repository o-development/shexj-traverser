import { shapeExpr, shapeExprRef } from "shexj";
import Transformers, { ParentTrace } from "../Transformers.type";
import traverseNodeConstraint from "./traverseNodeConstraint";
import traverseShape from "./traverseShape";
import traverseShapeAnd from "./traverseShapeAnd";
import traverseShapeNot from "./traverseShapeNot";
import traverseShapeOr from "./traverseShapeOr";
import traverseShapeExternal from "./traverseShapeExternal";

export default async function traverseShapeExpr<
  SchemaReturn,
  ShapeOrReturn,
  ShapeAndReturn,
  ShapeNotReturn,
  ShapeExternalReturn,
  NodeConstraintReturn,
  ObjectLiteralReturn,
  IriStemReturn,
  IriStemRangeReturn,
  LiteralStemReturn,
  LiteralStemRangeReturn,
  LanguageReturn,
  LanguageStemReturn,
  LanguageStemRangeReturn,
  WildcardReturn,
  ShapeReturn,
  EachOfReturn,
  OneOfReturn,
  TripleConstraintReturn,
  SemActReturn,
  AnnotationReturn,
  shapeExprReturn,
  valueSetValueReturn,
  tripleExprReturn,
  Schema_startActsReturn,
  Schema_startReturn,
  Schema_shapesReturn,
  ShapeOr_shapeExprsReturn,
  ShapeAnd_shapeExprsReturn,
  ShapeNot_shapeExprReturn,
  NodeConstraint_valuesReturn,
  IriStemRange_exclusionsReturn,
  LiteralStemRange_exclusionsReturn,
  LanguageStemRange_exclusionsReturn,
  Shape_expressionReturn,
  Shape_semActsReturn,
  Shape_AnnotationsReturn,
  EachOf_expressionsReturn,
  EachOf_semActsReturn,
  EachOf_AnnotationsReturn,
  OneOf_expressionsReturn,
  OneOf_semActsReturn,
  OneOf_AnnotationsReturn,
  TripleConstraint_valueExprReturn,
  TripleConstraint_semActsReturn,
  TripleConstraint_AnnotationsReturn
>(
  expr: shapeExpr,
  transformers: Transformers<
    SchemaReturn,
    ShapeOrReturn,
    ShapeAndReturn,
    ShapeNotReturn,
    ShapeExternalReturn,
    NodeConstraintReturn,
    ObjectLiteralReturn,
    IriStemReturn,
    IriStemRangeReturn,
    LiteralStemReturn,
    LiteralStemRangeReturn,
    LanguageReturn,
    LanguageStemReturn,
    LanguageStemRangeReturn,
    WildcardReturn,
    ShapeReturn,
    EachOfReturn,
    OneOfReturn,
    TripleConstraintReturn,
    SemActReturn,
    AnnotationReturn,
    shapeExprReturn,
    valueSetValueReturn,
    tripleExprReturn,
    Schema_startActsReturn,
    Schema_startReturn,
    Schema_shapesReturn,
    ShapeOr_shapeExprsReturn,
    ShapeAnd_shapeExprsReturn,
    ShapeNot_shapeExprReturn,
    NodeConstraint_valuesReturn,
    IriStemRange_exclusionsReturn,
    LiteralStemRange_exclusionsReturn,
    LanguageStemRange_exclusionsReturn,
    Shape_expressionReturn,
    Shape_semActsReturn,
    Shape_AnnotationsReturn,
    EachOf_expressionsReturn,
    EachOf_semActsReturn,
    EachOf_AnnotationsReturn,
    OneOf_expressionsReturn,
    OneOf_semActsReturn,
    OneOf_AnnotationsReturn,
    TripleConstraint_valueExprReturn,
    TripleConstraint_semActsReturn,
    TripleConstraint_AnnotationsReturn
  >,
  parentStack: ParentTrace[]
): Promise<shapeExprReturn> {
  let transformmedChild:
    | shapeExprRef
    | ShapeOrReturn
    | ShapeAndReturn
    | ShapeNotReturn
    | NodeConstraintReturn
    | ShapeReturn
    | ShapeExternalReturn;
  if (typeof expr === "string") {
    transformmedChild = expr;
  } else {
    switch (expr.type) {
      case "ShapeOr":
        transformmedChild = await traverseShapeOr(
          expr,
          transformers,
          parentStack
        );
        break;
      case "ShapeAnd":
        transformmedChild = await traverseShapeAnd(
          expr,
          transformers,
          parentStack
        );
        break;
      case "ShapeNot":
        transformmedChild = await traverseShapeNot(
          expr,
          transformers,
          parentStack
        );
        break;
      case "NodeConstraint":
        transformmedChild = await traverseNodeConstraint(
          expr,
          transformers,
          parentStack
        );
        break;
      case "Shape":
        transformmedChild = await traverseShape(
          expr,
          transformers,
          parentStack
        );
        break;
      case "ShapeExternal":
        transformmedChild = await traverseShapeExternal(
          expr,
          transformers,
          parentStack
        );
        break;
    }
  }
  return await transformers.shapeExpr(expr, transformmedChild, parentStack);
}
