import ShexJTraverser from "./shexJTraverser";
import kitchenSinkSchema from "shex-test/schemas/kitchenSink.json";
import * as dom from "dts-dom";
import { jsonld2graphobject } from "jsonld2graphobject";
import { circular } from "./testShape";

export const ShexJTypeTransformer = ShexJTraverser.createTransformer<{
  Schema: {
    return: string;
  };
  shapeExprs: {
    return: string;
  };
  ShapeOr: {
    return: string;
    properties: {
      shapeExprs: string;
    };
  };
  ShapeAnd: {
    return: string;
    properties: {
      shapeExprs: string;
    };
  };
  ShapeNot: {
    return: string;
    properties: {
      shapeExpr: string;
    };
  };
  ShapeExternal: {
    return: string;
  };
  NodeConstraint: {
    return: string;
    properties: {
      values: string;
    };
  };
  valueSetValue: {
    return: string;
  };
  ObjectLiteral: {
    return: string;
  };
  IriStem: {
    return: string;
  };
  IriStemRange: {
    return: string;
    properties: {
      exclusions: string;
    };
  };
  LiteralStem: {
    return: string;
  };
  LiteralStemRange: {
    return: string;
    properties: {
      exclusions: string;
    };
  };
  Language: {
    return: string;
  };
  LanguageStem: {
    return: string;
  };
  LanguageStemRange: {
    return: string;
    properties: {
      exclusions: string;
    };
  };
  Wildcard: {
    return: string;
  };
  Shape: {
    return: string;
    properties: {
      expression: string;
      semActs: string;
      annotations: string;
    };
  };
  tripleExpr: {
    return: string;
  };
  EachOf: {
    return: string;
    properties: {
      expressions: string;
      semActs: string;
      annotations: string;
    };
  };
  OneOf: {
    return: string;
    properties: {
      expressions: string;
      semActs: string;
      annotations: string;
    };
  };
  TripleConstraint: {
    return: string;
    properties: {
      valueExpr: string;
      semActs: string;
      annotations: string;
    };
  };
  SemAct: {
    return: boolean;
  };
  Annotation: {
    return: string;
  };
}>({
  Schema: {
    transformer: async (schema, transformedChildren) => {
      return `Schema(startActs(${transformedChildren.startActs}),start(${transformedChildren.start}),shapes(${transformedChildren.shapes}))`;
    },
  },
});

async function run() {
  const result = await ShexJTypeTransformer.transform(
    await jsonld2graphobject({ "@id": "SCHEMA", ...circular }, "SCHEMA"),
    "Schema"
  );
  console.log("Final Result");
  console.log(result);
}
run();
