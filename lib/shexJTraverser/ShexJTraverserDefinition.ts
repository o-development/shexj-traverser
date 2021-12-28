import { shapeExpr, valueSetValue } from "shexj";
import { ShexJTraverserTypes } from ".";
import { TraverserDefinition } from "../typeTraverser";

export const ShexJTraverserDefinition: TraverserDefinition<ShexJTraverserTypes> =
  {
    Schema: {
      kind: "interface",
      properties: {
        startActs: {
          isArray: true,
          isOptional: true,
          typeName: "SemAct",
        },
        start: {
          isArray: false,
          isOptional: true,
          typeName: "shapeExpr",
        },
        shapes: {
          isArray: true,
          isOptional: true,
          typeName: "shapeExpr",
        },
      },
    },
    shapeExpr: {
      kind: "union",
      selector: (item: shapeExpr) => {
        if (typeof item === "string") {
          throw Error("String shape expression not supported.");
        }
        return item.type;
      },
    },
    ShapeOr: {
      kind: "interface",
      properties: {
        shapeExprs: {
          isArray: true,
          isOptional: false,
          typeName: "shapeExpr",
        },
      },
    },
    ShapeAnd: {
      kind: "interface",
      properties: {
        shapeExprs: {
          isArray: true,
          isOptional: false,
          typeName: "shapeExpr",
        },
      },
    },
    ShapeNot: {
      kind: "interface",
      properties: {
        shapeExpr: {
          isArray: false,
          isOptional: false,
          typeName: "shapeExpr",
        },
      },
    },
    ShapeExternal: {
      kind: "interface",
      properties: {},
    },
    NodeConstraint: {
      kind: "interface",
      properties: {
        values: {
          isArray: true,
          isOptional: true,
          typeName: "valueSetValue",
        },
      },
    },
    valueSetValue: {
      kind: "union",
      selector: (
        item: valueSetValue
      ):
        | "IriStem"
        | "IriStemRange"
        | "LiteralStem"
        | "LiteralStemRange"
        | "Language"
        | "LanguageStem"
        | "LanguageStemRange"
        | "ObjectLiteral" => {
        if (typeof item === "string") {
          throw new Error("string valueSetValue not supported");
        }
        if (item.type) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return item.type as any;
        }
        return "ObjectLiteral";
      },
    },
    ObjectLiteral: {
      kind: "interface",
      properties: {},
    },
    IriStem: {
      kind: "interface",
      properties: {},
    },
    IriStemRange: {
      kind: "interface",
      properties: {
        exclusions: {
          isArray: false,
          isOptional: true,
          typeName: "IriStem",
        },
      },
    },
    LiteralStem: {
      kind: "interface",
      properties: {},
    },
    LiteralStemRange: {
      kind: "interface",
      properties: {
        exclusions: {
          isArray: true,
          isOptional: false,
          typeName: "LiteralStem",
        },
      },
    },
    Language: {
      kind: "interface",
      properties: {},
    },
    LanguageStem: {
      kind: "interface",
      properties: {},
    },
    LanguageStemRange: {
      kind: "interface",
      properties: {
        exclusions: {
          isArray: true,
          isOptional: false,
          typeName: "LanguageStem",
        },
      },
    },
    Wildcard: {
      kind: "interface",
      properties: {},
    },
    Shape: {
      kind: "interface",
      properties: {
        expression: {
          isArray: false,
          isOptional: true,
          typeName: "tripleExpr",
        },
        semActs: {
          isArray: true,
          isOptional: true,
          typeName: "SemAct",
        },
        annotation: {
          isArray: false,
          isOptional: true,
          typeName: "Annotation",
        },
      },
    },
    tripleExpr: {
      kind: "union",
      selector: (item) => {
        if (typeof item === "string") {
          throw new Error("String tripleExpr not supported");
        }
        return item.type;
      },
    },
    EachOf: {
      kind: "interface",
      properties: {
        expressions: {
          isArray: true,
          isOptional: false,
          typeName: "tripleExpr",
        },
        semActs: {
          isArray: true,
          isOptional: true,
          typeName: "SemAct",
        },
        annotations: {
          isArray: true,
          isOptional: true,
          typeName: "Annotation",
        },
      },
    },
    OneOf: {
      kind: "interface",
      properties: {
        expressions: {
          isArray: true,
          isOptional: false,
          typeName: "tripleExpr",
        },
        semActs: {
          isArray: true,
          isOptional: true,
          typeName: "SemAct",
        },
        annotations: {
          isArray: true,
          isOptional: true,
          typeName: "Annotation",
        },
      },
    },
    TripleConstraint: {
      kind: "interface",
      properties: {
        valueExpr: {
          isArray: false,
          isOptional: true,
          typeName: "shapeExpr",
        },
        semActs: {
          isArray: true,
          isOptional: true,
          typeName: "SemAct",
        },
        annotations: {
          isArray: true,
          isOptional: true,
          typeName: "Annotation",
        },
      },
    },
    SemAct: {
      kind: "interface",
      properties: {},
    },
    Annotation: {
      kind: "interface",
      properties: {},
    },
  };
