export interface Schema {
  "@context": "http://www.w3.org/ns/shex.jsonld";
  type: "Schema";
  startActs?: SemAct[];
  start?: shapeExpr;
  shapes?: shapeExpr[];
  imports?: IRIREF[];
}

export type shapeExpr =
  | ShapeOr
  | ShapeAnd
  | ShapeNot
  | NodeConstraint
  | Shape
  | ShapeExternal
  | shapeExprRef;

export interface ShapeOr {
  type: "ShapeOr";
  id?: shapeExprLabel;
  shapeExprs: shapeExpr[];
}

export interface ShapeAnd {
  type: "ShapeAnd";
  id?: shapeExprLabel;
  shapeExprs: shapeExpr[];
}

export interface ShapeNot {
  type: "ShapeNot";
  id?: shapeExprLabel;
  shapeExpr: shapeExpr;
}

export interface ShapeExternal {
  type: "ShapeExternal";
  id?: shapeExprLabel;
}

export type shapeExprRef = shapeExprLabel;

export type shapeExprLabel = IRIREF | BNODE;

export interface NodeConstraintBase {
  type: "NodeConstraint";
  id?: shapeExprLabel;
  nodeKind?: "iri" | "bnode" | "nonliteral" | "literal";
  datatype?: IRIREF;
  values?: valueSetValue[];
}

export type NodeConstraint = NodeConstraintBase & xsFacet;

export type xsFacet = stringFacet | numericFacet;

export type stringFacet = lengthStringFacet | patternStringFacet;

export interface lengthStringFacet {
  length?: INTEGER;
  minlength?: INTEGER;
  maxlength?: INTEGER;
}

export interface patternStringFacet {
  pattern: String;
  flags?: String;
}

export interface numericFacet {
  mininclusive?: numericLiteral;
  minexclusive?: numericLiteral;
  maxinclusive?: numericLiteral;
  maxexclusive?: numericLiteral;
  totaldigits?: INTEGER;
  fractiondigits?: INTEGER;
}

export type numericLiteral = INTEGER | DECIMAL | DOUBLE;

export type valueSetValue =
  | objectValue
  | IriStem
  | IriStemRange
  | LiteralStem
  | LiteralStemRange
  | Language
  | LanguageStem
  | LanguageStemRange;

export type objectValue = IRIREF | ObjectLiteral;

export interface ObjectLiteral {
  value: STRING;
  language?: STRING;
  type?: STRING;
}

export interface IriStem {
  type: "IriStem";
  stem: IRIREF;
}

export interface IriStemRange {
  type: "IriStemRange";
  stem: IRIREF | Wildcard;
  exclusions: (IRIREF | IriStem)[];
}

export interface LiteralStem {
  type: "LiteralStem";
  stem: STRING;
}

export interface LiteralStemRange {
  type: "LiteralStemRange";
  stem: STRING | Wildcard;
  exclusions: (STRING | LiteralStem)[];
}

export interface Language {
  type: "Language";
  languageTag: LANGTAG;
}

export interface LanguageStem {
  type: "LanguageStem";
  stem: LANGTAG;
}

export interface LanguageStemRange {
  type: "LanguageStemRange";
  stem: LANGTAG | Wildcard;
  exclusions: (LANGTAG | LanguageStem)[];
}

export interface Wildcard {
  type: "Wildcard"
}

export interface Shape {
  type: "Shape";
  id?: shapeExprLabel;
  closed?: BOOL;
  extra?: IRIREF[];
  expression?: tripleExpr;
  semActs?: SemAct[];
  annotations?: Annotation[];
}

export type tripleExpr = EachOf | OneOf | TripleConstraint | tripleExprRef;

export interface EachOf {
  type: "EachOf";
  id?: tripleExprLabel;
  expressions: tripleExpr[];
  min?: INTEGER;
  max?: INTEGER;
  semActs?: SemAct[];
  annotations?: Annotation[];
}

export interface OneOf {
  type: "OneOf";
  id?: tripleExprLabel;
  expressions: tripleExpr[];
  min?: INTEGER;
  max?: INTEGER;
  semActs?: SemAct[];
  annotations?: Annotation[];
}

export interface TripleConstraint {
  type: "TripleConstraint";
  id?: tripleExprLabel;
  inverse?: BOOL;
  predicate: IRIREF;
  valueExpr?: shapeExpr;
  min?: INTEGER;
  max?: INTEGER;
  semActs?: SemAct[];
  annotations?: Annotation[];
}

export type tripleExprRef = tripleExprLabel;

export type tripleExprLabel = IRIREF | BNODE;

export interface SemAct {
  type: "SemAct";
  name: IRIREF;
  code?: STRING;
}

export interface Annotation {
  type: "Annotation";
  predicate: IRIREF;
  object: objectValue;
}

/**
 * Terminals
 */
export type IRIREF = string;
export type BNODE = string;
export type BOOL = boolean;
export type INTEGER = number;
export type DECIMAL = number;
export type DOUBLE = number;
export type LANGTAG = string;
export type STRING = string;
