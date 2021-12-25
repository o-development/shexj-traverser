/* eslint-disable @typescript-eslint/no-explicit-any */

export interface InterfaceTraverserReturnType<
  PropertyKeys extends string | undefined
> {
  returns: any;
  properties: PropertyKeys extends string
    ? {
        [key in PropertyKeys]: any;
      }
    : undefined;
}

export interface UnionTraverserReturnType {
  returns: any;
}

export default interface TraverserReturnTypes {
  Schema: InterfaceTraverserReturnType<"startActs" | "start" | "shapes">;
  shapeExpr: UnionTraverserReturnType;
  ShapeOr: InterfaceTraverserReturnType<"shapeExprs">;
  ShapeAnd: InterfaceTraverserReturnType<"shapeExprs">;
  ShapeNot: InterfaceTraverserReturnType<"shapeExprs">;
  ShapeExternal: InterfaceTraverserReturnType<undefined>;
  NodeConstraint: InterfaceTraverserReturnType<"values">;
  valueSetValue: UnionTraverserReturnType;
  ObjectLiteral: InterfaceTraverserReturnType<undefined>;
  IriStem: InterfaceTraverserReturnType<undefined>;
  IriStemRange: InterfaceTraverserReturnType<"exclusions">;
  LiteralStem: InterfaceTraverserReturnType<undefined>;
  LiteralStemRange: InterfaceTraverserReturnType<"exclusions">;
  Language: InterfaceTraverserReturnType<undefined>;
  LanguageStem: InterfaceTraverserReturnType<undefined>;
  LanguageStemRange: InterfaceTraverserReturnType<"exclusions">;
  Wildcard: InterfaceTraverserReturnType<undefined>;
  Shape: InterfaceTraverserReturnType<"expression" | "semActs" | "annotations">;
  tripleExpr: UnionTraverserReturnType;
  EachOf: InterfaceTraverserReturnType<
    "expressions" | "semActs" | "annotations"
  >;
  OneOf: InterfaceTraverserReturnType<
    "expressions" | "semActs" | "annotations"
  >;
  TripleConstraint: InterfaceTraverserReturnType<
    "expressions" | "semActs" | "annotations"
  >;
  SemAct: InterfaceTraverserReturnType<undefined>;
  Annotation: InterfaceTraverserReturnType<undefined>;
}