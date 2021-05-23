import { shapeExprObject } from "./shexTypes";
import Transformers from "./Transformers";

const defaultTransformers: Transformers = {
  Schema: async (schema, transformmedChildren) => {
    return {
      ...schema,
      ...transformmedChildren,
    };
  },
  prefixes: async (prefixes) => {
    return prefixes;
  },
  SemAct: async (semAct) => {
    return semAct;
  },
  shapeExpr: async (shapeExpr, transformmedChild) => {
    return transformmedChild;
  },
  shapes: async (shapes, transformedChildren) => {
    return transformedChildren as Record<string, shapeExprObject>;
  },
  ShapeOr: async (shapeOr, transformmedChildren) => {
    return { ...shapeOr, ...transformmedChildren };
  },
  ShapeAnd: async (shapeAnd, transformmedChildren) => {
    return { ...shapeAnd, ...transformmedChildren };
  },
  ShapeNot: async (shapeNot, transformmedChild) => {
    return { ...shapeNot, ...transformmedChild };
  },
  ShapeRef: async (shapeRef) => {
    return shapeRef;
  },
  NodeConstraint: async (nodeConstraint, transformedChildren) => {
    return { ...nodeConstraint, ...transformedChildren };
  },
  Shape: async (shape, transformmedChildren) => {
    return { ...shape, ...transformmedChildren };
  },
  valueSetValue: async (valueSetValue, transformmedChild) => {
    return transformmedChild;
  },
  tripleExpr: async (tripleExpr, transformmedChild) => {
    return transformmedChild;
  },
  Annotation: async (annotation) => {
    return annotation;
  },
  EachOf: async (eachOf, transformedChildren) => {
    return { ...eachOf, ...transformedChildren };
  },
  OneOf: async (oneOf, transformedChildren) => {
    return { ...oneOf, ...transformedChildren };
  },
  TripleConstraint: async (tripleConstraint, transformmedChildren) => {
    return { ...tripleConstraint, ...transformmedChildren };
  },
  ObjectLiteral: async (objectLiteral) => {
    return objectLiteral;
  },
  IriStem: async (iriStem) => {
    return iriStem;
  },
  IriStemRange: async (iriStemRange, transformedChildren) => {
    return { ...iriStemRange, ...transformedChildren };
  },
  LiteralStem: async (literalStem) => {
    return literalStem;
  },
  LiteralStemRange: async (literalStemRange, transformedChildren) => {
    return { ...literalStemRange, ...transformedChildren };
  },
  Language: async (language) => {
    return language;
  },
  LanguageStem: async (languageStem) => {
    return languageStem;
  },
  LanguageStemRange: async (languageStemRange, transformedChildren) => {
    return { ...languageStemRange, ...transformedChildren };
  },
};

export default defaultTransformers;
