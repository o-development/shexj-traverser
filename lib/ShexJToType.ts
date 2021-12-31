import ShexJTraverser from "./shexJTraverser";
import kitchenSinkSchema from "shex-test/schemas/kitchenSink.json";
import * as dom from "dts-dom";
import { jsonld2graphobject } from "jsonld2graphobject";

export const ShexJTypeTransformer = ShexJTraverser.createTransformer<{
  Schema: {
    return: dom.NamespaceDeclaration;
  };
  shapeExpr: {
    return: dom.NamespaceMember;
  };
  Shape: {
    return: dom.InterfaceDeclaration;
  };
  EachOf: {
    return: dom.InterfaceDeclaration;
  }
}>({
  Schema: {
    transformer: async (
      schema,
      transformedChildren
    ): Promise<dom.NamespaceDeclaration> => {
      transformedChildren.shapes;
      const namespace = dom.create.namespace("namespace");
      if (transformedChildren.shapes) {
        namespace.members.push(...transformedChildren.shapes);
      }
      return namespace;
    },
  },
  shapeExpr: (expr, transformedChildren): Promise<dom.NamespaceMember> => {
    throw new Error("Not Implemented");
  },
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
  Shape: {
    transformer: (shape, transformedChildren): Promise<dom.InterfaceDeclaration> => {
      const newInterface = dom.create.interface("placeholderName");
      newInterface.jsDocComment = "Placeholder Comment";
      transformedChildren.expression
      throw new Error("Not Implemented");
    },
  },
  tripleExpr: undefined,
  EachOf: {
    transformer: (eachOf, transformedChildren): Promise<dom.InterfaceDeclaration> => {
      transformedChildren.expressions.forEach((child) => {
        
      });
      throw new Error("Not Implemented");

    },
  },
  OneOf: undefined,
  TripleConstraint: undefined,
  SemAct: undefined,
  Annotation: undefined,
});

async function run() {
  const result = await ShexJTypeTransformer.transform(
    await jsonld2graphobject(
      { "@id": "SCHEMA", ...kitchenSinkSchema },
      "SCHEMA"
    ),
    "Schema"
  );
  console.log("Final Result");
  console.log(result);
  console.log(dom.emit(result));
}
run();
