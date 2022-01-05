import {
  Annotation,
  EachOf,
  IriStem,
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
  ShapeExternal,
  ShapeNot,
  ShapeOr,
  Wildcard,
  shapeExpr,
  valueSetValue,
  tripleExpr,
  TripleConstraint,
} from "shexj";
import { ValidateTraverserTypes } from "../typeTraverser";

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
    properties: Record<string, never>;
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
    properties: Record<string, never>;
  };
  IriStem: {
    kind: "interface";
    type: IriStem;
    properties: Record<string, never>;
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
    properties: Record<string, never>;
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
    properties: Record<string, never>;
  };
  LanguageStem: {
    kind: "interface";
    type: LanguageStem;
    properties: Record<string, never>;
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
    properties: Record<string, never>;
  };
  Shape: {
    kind: "interface";
    type: Shape;
    properties: {
      expression: "tripleExpr";
      semActs: "SemAct";
      annotations: "Annotation";
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
    type: TripleConstraint;
    properties: {
      valueExpr: "shapeExpr";
      semActs: "SemAct";
      annotations: "Annotation";
    };
  };
  SemAct: {
    kind: "interface";
    type: SemAct;
    properties: Record<string, never>;
  };
  Annotation: {
    kind: "interface";
    type: Annotation;
    properties: Record<string, never>;
  };
}>;
