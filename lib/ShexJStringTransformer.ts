import ShexJTraverser from "./shexJTraverser";
import allSchema from "shex-test/schemas/_all.json";
import zeroSchema from "shex-test/schemas/0.json";
import { Schema } from "shexj";

export const ShexJStringTransformer = ShexJTraverser.createTransformer<{
  Schema: {
    return: string;
    properties: {
      shapes: string;
    };
  };
}>({
  Schema: {
    transformer: async (_originalData, childData): Promise<string> => {
      console.log(childData);
      return "schema";
    },
    properties: {
      shapes: async (_originalData, childData): Promise<string> => {
        console.log(childData);
        return "shapes";
      },
    },
  },
  shapeExpr: undefined,
  ShapeOr: undefined,
  ShapeAnd: undefined,
  ShapeNot: undefined,
  ShapeExternal: undefined,
  NodeConstraint: undefined,
  valueSetValue: undefined,
  ObjectLiteral: undefined,
  IriStem: undefined,
  IriStemRange: undefined,
  LiteralStem: undefined,
  LiteralStemRange: undefined,
  Language: undefined,
  LanguageStem: undefined,
  LanguageStemRange: undefined,
  Wildcard: undefined,
  Shape: undefined,
  tripleExpr: undefined,
  EachOf: undefined,
  OneOf: undefined,
  TripleConstraint: undefined,
  SemAct: undefined,
  Annotation: undefined,
});

ShexJStringTransformer.transform(zeroSchema as Schema, "Schema").then(
  (result) => {
    console.log("Final Result");
    console.log(result);
  }
);
