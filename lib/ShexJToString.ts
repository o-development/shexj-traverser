import ShexJTraverser from "./shexJTraverser";
import kitchenSinkSchema from "shex-test/schemas/kitchenSink.json";
import { jsonld2graphobject } from "jsonld2graphobject";
import { circular, profile, simple } from "./testShape";

console.time("a");
export const ShexJTypeTransformer = ShexJTraverser.createTransformer<{
  Schema: {
    return: string;
    properties: {
      startActs: number;
      shapes: number;
    };
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
    return: string;
  };
  Annotation: {
    return: string;
  };
}>({
  Schema: {
    transformer: async (schema, transformedChildren) => {
      return `Schema(startActs:${transformedChildren.startActs},start:${transformedChildren.start},shapes:${transformedChildren.shapes})`;
    },
  },
  shapeExpr: async (shapeExpression, transformedChildren) => {
    return `shapeExpr(${transformedChildren})`;
  },
  ShapeOr: {
    transformer: async (shapeOr, transformedChildren) => {
      return `ShapeOr(shapeExprs:${transformedChildren.shapeExprs})`;
    },
  },
  ShapeAnd: {
    transformer: async (shapeAnd, transformedChildren) => {
      return `ShapeAnd(shapeExprs:${transformedChildren.shapeExprs})`;
    },
  },
  ShapeNot: {
    transformer: async (shapeNot, transformedChildren) => {
      return `ShapeNot(shapeExpr:${transformedChildren.shapeExpr})`;
    },
  },
  ShapeExternal: {
    transformer: async () => {
      return `ShapeExternal()`;
    },
  },
  NodeConstraint: {
    transformer: async (nodeConstraint, transformedChildren) => {
      return `NodeConstraint(values:${transformedChildren.values})`;
    },
  },
  valueSetValue: async (valueSetVal, transformedChildren) => {
    return `valueSetValue(${transformedChildren})`;
  },
  ObjectLiteral: {
    transformer: async () => {
      return `ObjectLiteral()`;
    },
  },
  IriStem: {
    transformer: async () => {
      return `IriStem()`;
    },
  },
  IriStemRange: {
    transformer: async (iriStemRange, transformedChildren) => {
      return `IriStemRange(exclusions:${transformedChildren.exclusions})`;
    },
  },
  LiteralStem: {
    transformer: async () => {
      return `LiteralStem()`;
    },
  },
  LiteralStemRange: {
    transformer: async (literalStemRange, transformedChildren) => {
      return `LiteralStemRange(exclusions:${transformedChildren.exclusions})`;
    },
  },
  Language: {
    transformer: async () => {
      return `Language()`;
    },
  },
  LanguageStem: {
    transformer: async () => {
      return `LanguageStem()`;
    },
  },
  LanguageStemRange: {
    transformer: async (languageStemRange, transformedChildren) => {
      return `LanguageStemRange(exclusions:${transformedChildren.exclusions})`;
    },
  },
  Wildcard: {
    transformer: async () => {
      return `Wildcard()`;
    },
  },
  Shape: {
    transformer: async (shape, transformedChildren) => {
      return `Shape(expression:${transformedChildren.expression},annotations:${transformedChildren.annotations},semActs:${transformedChildren.semActs})`;
    },
  },
  tripleExpr: async (tripleExpr, transformedChildren) => {
    return `tripleExpr(${transformedChildren})`;
  },
  EachOf: {
    transformer: async (eachOf, transformedChildren) => {
      return `EachOf(expressions:${transformedChildren.expressions},annotations:${transformedChildren.annotations},semActs:${transformedChildren.semActs})`;
    },
  },
  OneOf: {
    transformer: async (eachOf, transformedChildren) => {
      return `OneOf(expressions:${transformedChildren.expressions},annotations:${transformedChildren.annotations},semActs:${transformedChildren.semActs})`;
    },
  },
  TripleConstraint: {
    transformer: async (tripleConstraint, transformedChildren) => {
      return `TripleConstraint(valueExpr:${transformedChildren.valueExpr},annotations:${transformedChildren.annotations},semActs:${transformedChildren.semActs})`;
    },
  },
  SemAct: {
    transformer: async () => {
      return `SemAct()`;
    },
  },
  Annotation: {
    transformer: async () => {
      return `Annotation()`;
    },
  },
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
  console.timeEnd("a");
}
run();
