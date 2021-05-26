import { NodeConstraint } from "../shexTypes";
import Transformers, { ParentTrace } from "../Transformers";
import traverseValueSetValue from "./traverseValueSetValue";

export default async function traverseNodeConstraint<
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
  nodeConstraint: NodeConstraint,
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
): Promise<NodeConstraintReturn> {
  let values: valueSetValueReturn[] | undefined;
  if (nodeConstraint.values) {
    values = await Promise.all(
      nodeConstraint.values.map(async (valueSetValue, index) => {
        return await traverseValueSetValue(valueSetValue, transformers, parentStack.concat([{
          parent: nodeConstraint,
          type: "NodeConstraint",
          via: "value",
          viaIndex: index
        }]));
      })
    );
  }
  return await transformers.NodeConstraint(nodeConstraint, { values }, parentStack);
}
