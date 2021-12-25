/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Annotation,
  EachOf,
  IRIREF,
  IriStem,
  IriStemRange,
  LANGTAG,
  Language,
  LanguageStem,
  LanguageStemRange,
  LiteralStem,
  LiteralStemRange,
  NodeConstraint,
  ObjectLiteral,
  OneOf,
  Schema,
  SemAct,
  Shape,
  ShapeAnd,
  shapeExprRef,
  ShapeExternal,
  ShapeNot,
  ShapeOr,
  STRING,
  TripleConstraint,
  tripleExprRef,
  Wildcard,
  shapeExpr,
  valueSetValue,
  tripleExpr,
} from "shexj";
import { InterfaceTraverserReturnType } from "./TraverserReturnTypes.type";

export type KeyTypes = string | number | symbol;

export interface InterfaceType<TypeNames extends KeyTypes, Type> {
  kind: "interface";
  type: Type;
  properties?: {
    [key in keyof Type]: TypeNames;
  };
}

export interface UnionType<TypeNames extends KeyTypes, Type> {
  kind: "union";
  type: Type;
  typeNames: TypeNames;
}

export type TraverserTypes<TypeNames extends KeyTypes> = {
  [Property in TypeNames]:
    | InterfaceType<TypeNames, any>
    | UnionType<TypeNames, any>;
};

export type AssertExtends<
  Extended,
  Extends extends Extended
> = Extends extends Extended ? Extends : never;

export type ValidateTraverserTypes<Types extends TraverserTypes<any>> =
  AssertExtends<TraverserTypes<keyof Types>, Types>;

export type ShexJTraverserTypes = ValidateTraverserTypes<{
  Schema: {
    kind: "interface";
    type: Schema;
    properties: {
      startActs: "SemAct";
      start: "shapeExpr";
      shapes: "shapeExpr";
    };
  };
  shapeExpr: {
    kind: "union";
    type: shapeExpr;
    typeNames:
      | "ShapeOr"
      | "ShapeAnd"
      | "ShapeNot"
      | "NodeConstraint"
      | "Shape"
      | "ShapeExternal";
  };
  ShapeOr: {
    kind: "interface";
    type: ShapeOr;
    properties: {
      shapeExprs: "shapeExpr";
    };
  };
  ShapeAnd: {
    kind: "interface";
    type: ShapeAnd;
    properties: {
      shapeExprs: "shapeExpr";
    };
  };
  ShapeNot: {
    kind: "interface";
    type: ShapeNot;
    properties: {
      shapeExpr: "shapeExpr";
    };
  };
  ShapeExternal: {
    kind: "interface";
    type: ShapeExternal;
  };
  NodeConstraint: {
    kind: "interface";
    type: NodeConstraint;
    properties: {
      values: "valueSetValue";
    };
  };
  valueSetValue: {
    kind: "union";
    type: valueSetValue;
    typeNames:
      | "IriStem"
      | "IriStemRange"
      | "LiteralStem"
      | "LiteralStemRange"
      | "Language"
      | "LanguageStem"
      | "LanguageStemRange"
      | "ObjectLiteral";
  };
  ObjectLiteral: {
    kind: "interface";
    type: ObjectLiteral;
  };
  IriStem: {
    kind: "interface";
    type: IriStem;
  };
  IriStemRange: {
    kind: "interface";
    type: IriStem;
    properties: {
      exclusions: "IriStem";
    };
  };
  LiteralStem: {
    kind: "interface";
    type: LiteralStem;
  };
  LiteralStemRange: {
    kind: "interface";
    type: LiteralStemRange;
    properties: {
      exclusions: "LiteralStem";
    };
  };
  Language: {
    kind: "interface";
    type: Language;
  };
  LanguageStem: {
    kind: "interface";
    type: LanguageStem;
  };
  LanguageStemRange: {
    kind: "interface";
    type: LanguageStemRange;
    properties: {
      exclusions: "LanguageStem";
    };
  };
  Wildcard: {
    kind: "interface";
    type: Wildcard;
  };
  Shape: {
    kind: "interface";
    type: Shape;
    properties: {
      expression: "tripleExpr";
      semActs: "SemAct";
      annotation: "Annotation";
    };
  };
  tripleExpr: {
    kind: "union";
    type: tripleExpr;
    typeNames: "EachOf" | "OneOf" | "TripleConstraint";
  };
  EachOf: {
    kind: "interface";
    type: EachOf;
    properties: {
      expressions: "tripleExpr";
      semActs: "SemAct";
      annotations: "Annotation";
    };
  };
  OneOf: {
    kind: "interface";
    type: OneOf;
    properties: {
      expressions: "tripleExpr";
      semActs: "SemAct";
      annotations: "Annotation";
    };
  };
  TripleConstraint: {
    kind: "interface";
    type: EachOf;
    properties: {
      valueExpr: "shapeExpr";
      semActs: "SemAct";
      annotations: "Annotation";
    };
  };
  SemAct: {
    kind: "interface";
    type: SemAct;
  };
  Annotation: {
    kind: "interface";
    type: Annotation;
  };
}>;

export type ShexJTraverserTypesCheck = AssertExtends<
  TraverserTypes<
    | "Schema"
    | "shapeExpr"
    | "ShapeOr"
    | "ShapeAnd"
    | "ShapeNot"
    | "ShapeExternal"
    | "NodeConstraint"
    | "valueSetValue"
    | "ObjectLiteral"
    | "IriStem"
    | "IriStemRange"
    | "LiteralStem"
    | "LiteralStemRange"
    | "Language"
    | "LanguageStem"
    | "LanguageStemRange"
    | "Wildcard"
    | "Shape"
    | "tripleExpr"
    | "EachOf"
    | "OneOf"
    | "TripleConstraint"
    | "SemAct"
    | "Annotation"
  >,
  ShexJTraverserTypes
>;

export type TraverserDefinition<Types extends TraverserTypes<any>> = {
  [TypeField in keyof Types]: Types[TypeField] extends InterfaceType<
    keyof Types,
    any
  >
    ? {
        kind: "interface";
      } & (undefined extends Types[TypeField]["properties"]
        ? // eslint-disable-next-line @typescript-eslint/ban-types
          {}
        : {
            properties: {
              [PropertyField in keyof Types[TypeField]["properties"]]: {
                isArray: NonNullable<
                  Types[TypeField]["type"][PropertyField]
                > extends Array<any>
                  ? true
                  : false;
                isOptional: undefined extends Types[TypeField]["type"][PropertyField]
                  ? true
                  : false;
                typeName: Types[TypeField]["properties"][PropertyField];
              };
            };
          })
    : Types[TypeField] extends UnionType<keyof Types, any>
    ? {
        kind: "union";
        selector: (
          item: Types[TypeField]["type"]
        ) => Types[TypeField]["typeNames"];
      }
    : never;
};

const ShexJTraverserDefinition: TraverserDefinition<ShexJTraverserTypes> = {
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
        return item.type as any;
      }
      return "ObjectLiteral";
    },
  },
  ObjectLiteral: {
    kind: "interface",
  },
  IriStem: {
    kind: "interface",
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
  },
  LanguageStem: {
    kind: "interface",
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
  },
  Annotation: {
    kind: "interface",
  },
};

// export type ShexJTraverserTypes = TraverserTypes<
//   | "Schema"
//   | "schapeExpr"
//   | "ShapeOr"
//   | "ShapeAnd"
//   | "ShapeNot"
//   | "ShapeExternal"
//   | "NodeConstraint"
//   | "valueSetValue"
//   | "ObjectLiteral"
//   | "IriStemRange"
//   | "LiteralStem"
//   | "LiteralStemRange"
//   | "Language"
// > & {
//   Schema: {
//     kind: "interface";
//     type: Schema;
//     properties: {
//       startActs: "ObjectLitdsfal";
//       dsfas: "dsfsdf";
//     };
//   };
//   // shapeExpr: UnionTraverserReturnType;
//   // ShapeOr: InterfaceTraverserReturnType<"shapeExprs">;
//   // ShapeAnd: InterfaceTraverserReturnType<"shapeExprs">;
//   // ShapeNot: InterfaceTraverserReturnType<"shapeExprs">;
//   // ShapeExternal: InterfaceTraverserReturnType<undefined>;
//   // NodeConstraint: InterfaceTraverserReturnType<"values">;
//   // valueSetValue: UnionTraverserReturnType;
//   // ObjectLiteral: InterfaceTraverserReturnType<undefined>;
//   // IriStem: InterfaceTraverserReturnType<undefined>;
//   // IriStemRange: InterfaceTraverserReturnType<"exclusions">;
//   // LiteralStem: InterfaceTraverserReturnType<undefined>;
//   // LiteralStemRange: InterfaceTraverserReturnType<"exclusions">;
//   // Language: InterfaceTraverserReturnType<undefined>;
//   // LanguageStem: InterfaceTraverserReturnType<undefined>;
//   // LanguageStemRange: InterfaceTraverserReturnType<"exclusions">;
//   // Wildcard: InterfaceTraverserReturnType<undefined>;
//   // Shape: InterfaceTraverserReturnType<"expression" | "semActs" | "annotations">;
//   // tripleExpr: UnionTraverserReturnType;
//   // EachOf: InterfaceTraverserReturnType<
//   //   "expressions" | "semActs" | "annotations"
//   // >;
//   // OneOf: InterfaceTraverserReturnType<
//   //   "expressions" | "semActs" | "annotations"
//   // >;
//   // TripleConstraint: InterfaceTraverserReturnType<
//   //   "expressions" | "semActs" | "annotations"
//   // >;
//   // SemAct: InterfaceTraverserReturnType<undefined>;
//   // Annotation: InterfaceTraverserReturnType<undefined>;
// };
