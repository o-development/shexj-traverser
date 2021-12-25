import Transformers from "./Transformers.type";

function transformedReturn(_: unknown, transformed: any) {
  return transformed
}

const defaultTransformers: Transformers = {
  Schema: async (schema, transformedChildren) => {
    return {
      ...schema,
      ...transformedChildren,
    };
  },
  ShapeOr: async (shapeOr, transformedChildren) => {
    return {
      ...shapeOr,
      ...transformedChildren,
    };
  },
  ShapeAnd: async (shapeAnd, transformedChildren) => {
    return {
      ...shapeAnd,
      ...transformedChildren,
    };
  },
  ShapeNot: async (shapeNot, transformedChildren) => {
    return {
      ...shapeNot,
      ...transformedChildren,
    };
  },
  ShapeExternal: async (shapeExternal) => {
    return shapeExternal;
  },
  NodeConstraint: async (nodeConstraint, transformedChildren) => {
    return {
      ...nodeConstraint,
      ...transformedChildren,
    };
  },
  ObjectLiteral: async (objectLiteral) => {
    return objectLiteral;
  },
  IriStem: async (iriStem) => {
    return iriStem;
  },
  IriStemRange: async (iriStemRange, transformedChildren) => {
    return {
      ...iriStemRange,
      ...transformedChildren,
    };
  },
  LiteralStem: async (literalStem) => {
    return literalStem;
  },
  LiteralStemRange: async (literalStemRange, transformedChildren) => {
    return {
      ...literalStemRange,
      ...transformedChildren,
    };
  },
  Language: async (language) => {
    return language;
  },
  LanguageStem: async (languageStem) => {
    return languageStem;
  },
  LanguageStemRange: async (languageStemRange, transformedChildren) => {
    return {
      ...languageStemRange,
      ...transformedChildren,
    };
  },
  Wildcard: async (wildcard) => {
    return wildcard;
  },
  Shape: async (shape, transformedChildren) => {
    return {
      ...shape,
      ...transformedChildren,
    };
  },
  EachOf: async (eachOf, transformedChildren) => {
    return {
      ...eachOf,
      ...transformedChildren,
    };
  },
  OneOf: async (oneOf, transformedChildren) => {
    return {
      ...oneOf,
      ...transformedChildren,
    };
  },
  TripleConstraint: async (tripleConstraint, transformedChildren) => {
    return {
      ...tripleConstraint,
      ...transformedChildren,
    };
  },
  SemAct: async (semAct) => {
    return semAct;
  },
  Annotation: async (annotation) => {
    return annotation;
  },
  shapeExpr: transformedReturn,
  valueSetValue: transformedReturn,
  tripleExpr: transformedReturn,
  Schema_startActs: transformedReturn,
  Schema_start: transformedReturn,
  Schema_shapes: transformedReturn,
  ShapeOr_shapeExprs: transformedReturn,
  ShapeAnd_shapeExprs: transformedReturn,
  ShapeNot_shapeExpr: transformedReturn,
  NodeConstraint_values: transformedReturn,
  IriStemRange_exclusions: transformedReturn,
  LiteralStemRange_exclusions: transformedReturn,
  LanguageStemRange_exclusions: transformedReturn,
  Shape_expression: transformedReturn,
  Shape_semActs: transformedReturn,
  Shape_Annotations: transformedReturn,
  EachOf_expressions: transformedReturn,
  EachOf_semActs: transformedReturn,
  EachOf_Annotations: transformedReturn,
  OneOf_expressions: transformedReturn,
  OneOf_semActs: transformedReturn,
  OneOf_Annotations: transformedReturn,
  TripleConstraint_valueExpr: transformedReturn,
  TripleConstraint_semActs: transformedReturn,
  TripleConstraint_Annotations: transformedReturn,
};

export default defaultTransformers;
