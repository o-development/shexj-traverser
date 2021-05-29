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

export interface ParentTrace {
  parent: unknown;
  type: string;
  via?: string;
  viaIndex?: number;
}

export default interface Transformers<
  // Base Return value generics
  SchemaReturn = Schema,
  ShapeOrReturn = ShapeOr,
  ShapeAndReturn = ShapeAnd,
  ShapeNotReturn = ShapeNot,
  ShapeExternalReturn = ShapeExternal,
  NodeConstraintReturn = NodeConstraint,
  ObjectLiteralReturn = ObjectLiteral,
  IriStemReturn = IriStem,
  IriStemRangeReturn = IriStemRange,
  LiteralStemReturn = LiteralStem,
  LiteralStemRangeReturn = LiteralStemRange,
  LanguageReturn = Language,
  LanguageStemReturn = LanguageStem,
  LanguageStemRangeReturn = LanguageStemRange,
  WildcardReturn = Wildcard,
  ShapeReturn = Shape,
  EachOfReturn = EachOf,
  OneOfReturn = OneOf,
  TripleConstraintReturn = TripleConstraint,
  SemActReturn = SemAct,
  AnnotationReturn = Annotation,
  // Return types for constructed types
  shapeExprReturn =
    | ShapeOrReturn
    | ShapeAndReturn
    | ShapeNotReturn
    | NodeConstraintReturn
    | ShapeReturn
    | ShapeExternalReturn
    | shapeExprRef,
  valueSetValueReturn =
    | IRIREF
    | ObjectLiteralReturn
    | IriStemReturn
    | IriStemRangeReturn
    | LiteralStemReturn
    | LiteralStemRangeReturn
    | LanguageReturn
    | LanguageStemReturn
    | LanguageStemRangeReturn,
  tripleExprReturn =
    | EachOfReturn
    | OneOfReturn
    | TripleConstraintReturn
    | tripleExprRef,
  // Return specific field values
  Schema_startActsReturn = SemActReturn[],
  Schema_startReturn = shapeExprReturn,
  Schema_shapesReturn = shapeExprReturn[],
  ShapeOr_shapeExprsReturn = shapeExprReturn[],
  ShapeAnd_shapeExprsReturn = shapeExprReturn[],
  ShapeNot_shapeExprReturn = shapeExprReturn,
  NodeConstraint_valuesReturn = valueSetValueReturn[],
  IriStemRange_exclusionsReturn = (IRIREF | IriStemReturn)[],
  LiteralStemRange_exclusionsReturn = (STRING | LiteralStemReturn)[],
  LanguageStemRange_exclusionsReturn = (LANGTAG | LanguageStemReturn)[],
  Shape_expressionReturn = tripleExprReturn,
  Shape_semActsReturn = SemActReturn[],
  Shape_AnnotationsReturn = AnnotationReturn[],
  EachOf_expressionsReturn = tripleExprReturn[],
  EachOf_semActsReturn = SemActReturn[],
  EachOf_AnnotationsReturn = AnnotationReturn[],
  OneOf_expressionsReturn = tripleExprReturn[],
  OneOf_semActsReturn = SemActReturn[],
  OneOf_AnnotationsReturn = AnnotationReturn[],
  TripleConstraint_valueExprReturn = shapeExprReturn,
  TripleConstraint_semActsReturn = SemActReturn[],
  TripleConstraint_AnnotationsReturn = AnnotationReturn[]
> {
  // Base Transformers
  Schema: (
    schema: Schema,
    transformedChildren: {
      startActs?: Schema_startActsReturn;
      start?: Schema_startReturn;
      shapes?: Schema_shapesReturn;
    }
  ) => Promise<SchemaReturn>;
  ShapeOr: (
    shapeOr: ShapeOr,
    transformedChildren: { shapeExprs: ShapeOr_shapeExprsReturn },
    parentStack: ParentTrace[]
  ) => Promise<ShapeOrReturn>;
  ShapeAnd: (
    shapeOr: ShapeAnd,
    transformedChildren: { shapeExprs: ShapeAnd_shapeExprsReturn },
    parentStack: ParentTrace[]
  ) => Promise<ShapeAndReturn>;
  ShapeNot: (
    shapeOr: ShapeNot,
    transformedChildren: { shapeExpr: ShapeNot_shapeExprReturn },
    parentStack: ParentTrace[]
  ) => Promise<ShapeNotReturn>;
  ShapeExternal: (
    shapeExternal: ShapeExternal,
    parentStack: ParentTrace[]
  ) => Promise<ShapeExternalReturn>;
  NodeConstraint: (
    nodeConstraint: NodeConstraint,
    transformedChildren: { values?: NodeConstraint_valuesReturn },
    parentStack: ParentTrace[]
  ) => Promise<NodeConstraintReturn>;
  ObjectLiteral: (
    objectLiteral: ObjectLiteral,
    parentStack: ParentTrace[]
  ) => Promise<ObjectLiteralReturn>;
  IriStem: (
    iriStem: IriStem,
    parentStack: ParentTrace[]
  ) => Promise<IriStemReturn>;
  IriStemRange: (
    iriStemRange: IriStemRange,
    transformedChildren: { exclusions: IriStemRange_exclusionsReturn },
    parentStack: ParentTrace[]
  ) => Promise<IriStemRangeReturn>;
  LiteralStem: (
    literalStem: LiteralStem,
    parentStack: ParentTrace[]
  ) => Promise<LiteralStemReturn>;
  LiteralStemRange: (
    literalStemRange: LiteralStemRange,
    transformedChildren: { exclusions: LiteralStemRange_exclusionsReturn },
    parentStack: ParentTrace[]
  ) => Promise<LiteralStemRangeReturn>;
  Language: (
    language: Language,
    parentStack: ParentTrace[]
  ) => Promise<LanguageReturn>;
  LanguageStem: (
    languageStem: LanguageStem,
    parentStack: ParentTrace[]
  ) => Promise<LanguageStemReturn>;
  LanguageStemRange: (
    languageStemRange: LanguageStemRange,
    transformedChildren: { exclusions: LanguageStemRange_exclusionsReturn },
    parentStack: ParentTrace[]
  ) => Promise<LanguageStemRangeReturn>;
  Wildcard: (
    wildcard: Wildcard,
    parentStack: ParentTrace[]
  ) => Promise<WildcardReturn>;
  Shape: (
    shape: Shape,
    transformedChildren: {
      expression?: Shape_expressionReturn;
      semActs?: Shape_semActsReturn;
      annotations?: Shape_AnnotationsReturn;
    },
    parentStack: ParentTrace[]
  ) => Promise<ShapeReturn>;
  EachOf: (
    eachOf: EachOf,
    transformedChildren: {
      expressions: EachOf_expressionsReturn;
      semActs?: EachOf_semActsReturn;
      annotations?: EachOf_AnnotationsReturn;
    },
    parentStack: ParentTrace[]
  ) => Promise<EachOfReturn>;
  OneOf: (
    eachOf: OneOf,
    transformedChildren: {
      expressions: OneOf_expressionsReturn;
      semActs?: OneOf_semActsReturn;
      annotations?: OneOf_AnnotationsReturn;
    },
    parentStack: ParentTrace[]
  ) => Promise<OneOfReturn>;
  TripleConstraint: (
    tripleConstraint: TripleConstraint,
    transformedChildren: {
      valueExpr?: TripleConstraint_valueExprReturn;
      semActs?: TripleConstraint_semActsReturn;
      annotations?: TripleConstraint_AnnotationsReturn;
    },
    parentStack: ParentTrace[]
  ) => Promise<TripleConstraintReturn>;
  SemAct: (
    wildcard: SemAct,
    parentStack: ParentTrace[]
  ) => Promise<SemActReturn>;
  Annotation: (
    wildcard: Annotation,
    parentStack: ParentTrace[]
  ) => Promise<AnnotationReturn>;
  // Constructed Type Transformers
  shapeExpr: (
    shapeExpr: shapeExpr,
    transformmedSelf:
      | ShapeOrReturn
      | ShapeAndReturn
      | ShapeNotReturn
      | NodeConstraintReturn
      | ShapeReturn
      | ShapeExternalReturn
      | shapeExprRef,
    parentStack: ParentTrace[]
  ) => Promise<shapeExprReturn>;
  valueSetValue: (
    valueSetValue: valueSetValue,
    transformmedSelf:
      | IRIREF
      | ObjectLiteralReturn
      | IriStemReturn
      | IriStemRangeReturn
      | LiteralStemReturn
      | LiteralStemRangeReturn
      | LanguageReturn
      | LanguageStemReturn
      | LanguageStemRangeReturn,
    parentStack: ParentTrace[]
  ) => Promise<valueSetValueReturn>;
  tripleExpr: (
    tripleExpr: tripleExpr,
    transformmedSelf:
      | EachOfReturn
      | OneOfReturn
      | TripleConstraintReturn
      | tripleExprRef,
    parentStack: ParentTrace[]
  ) => Promise<tripleExprReturn>;
  // Specific Field Transformers
  Schema_startActs: (
    semActs: SemAct[],
    transformed: SemActReturn[],
    parentStack: ParentTrace[]
  ) => Promise<Schema_startActsReturn>;
  Schema_start: (
    shapeExpr: shapeExpr,
    transformed: shapeExprReturn,
    parentStack: ParentTrace[]
  ) => Promise<Schema_startReturn>;
  Schema_shapes: (
    shapes: shapeExpr[],
    transformed: shapeExprReturn[],
    parentStack: ParentTrace[]
  ) => Promise<Schema_shapesReturn>;
  ShapeOr_shapeExprs: (
    shapeExprs: shapeExpr[],
    transformed: shapeExprReturn[],
    parentStack: ParentTrace[]
  ) => Promise<ShapeOr_shapeExprsReturn>;
  ShapeAnd_shapeExprs: (
    shapeExprs: shapeExpr[],
    transformed: shapeExprReturn[],
    parentStack: ParentTrace[]
  ) => Promise<ShapeAnd_shapeExprsReturn>;
  ShapeNot_shapeExpr: (
    shapeExpr: shapeExpr,
    transformed: shapeExprReturn,
    parentStack: ParentTrace[]
  ) => Promise<ShapeNot_shapeExprReturn>;
  NodeConstraint_values: (
    values: valueSetValue[],
    transformed: valueSetValueReturn[],
    parentStack: ParentTrace[]
  ) => Promise<NodeConstraint_valuesReturn>;
  IriStemRange_exclusions: (
    exclusions: (IRIREF | IriStem)[],
    transformed: (IRIREF | IriStemReturn)[],
    parentStack: ParentTrace[]
  ) => Promise<IriStemRange_exclusionsReturn>;
  LiteralStemRange_exclusions: (
    exclusions: (STRING | LiteralStem)[],
    transformed: (STRING | LiteralStemReturn)[],
    parentStack: ParentTrace[]
  ) => Promise<LiteralStemRange_exclusionsReturn>;
  LanguageStemRange_exclusions: (
    exclusions: (LANGTAG | LanguageStem)[],
    transformed: (LANGTAG | LanguageStemReturn)[],
    parentStack: ParentTrace[]
  ) => Promise<LanguageStemRange_exclusionsReturn>;
  Shape_expression: (
    expression: tripleExpr,
    transformed: tripleExprReturn,
    parentStack: ParentTrace[]
  ) => Promise<Shape_expressionReturn>;
  Shape_semActs: (
    semActs: SemAct[],
    transformed: SemActReturn[],
    parentStack: ParentTrace[]
  ) => Promise<Shape_semActsReturn>;
  Shape_Annotations: (
    annotations: Annotation[],
    transformed: AnnotationReturn[],
    parentStack: ParentTrace[]
  ) => Promise<Shape_AnnotationsReturn>;
  EachOf_expressions: (
    expressions: tripleExpr[],
    transformed: tripleExprReturn[],
    parentStack: ParentTrace[]
  ) => Promise<EachOf_expressionsReturn>;
  EachOf_semActs: (
    semActs: SemAct[],
    transformed: SemActReturn[],
    parentStack: ParentTrace[]
  ) => Promise<EachOf_semActsReturn>;
  EachOf_Annotations: (
    annotations: Annotation[],
    transformed: AnnotationReturn[],
    parentStack: ParentTrace[]
  ) => Promise<EachOf_AnnotationsReturn>;
  OneOf_expressions: (
    expressions: tripleExpr[],
    transformed: tripleExprReturn[],
    parentStack: ParentTrace[]
  ) => Promise<OneOf_expressionsReturn>;
  OneOf_semActs: (
    semActs: SemAct[],
    transformed: SemActReturn[],
    parentStack: ParentTrace[]
  ) => Promise<OneOf_semActsReturn>;
  OneOf_Annotations: (
    annotations: Annotation[],
    transformed: AnnotationReturn[],
    parentStack: ParentTrace[]
  ) => Promise<OneOf_AnnotationsReturn>;
  TripleConstraint_valueExpr: (
    valueExpr: shapeExpr,
    transformed: shapeExprReturn,
    parentStack: ParentTrace[]
  ) => Promise<TripleConstraint_valueExprReturn>;
  TripleConstraint_semActs: (
    semActs: SemAct[],
    transformed: SemActReturn[],
    parentStack: ParentTrace[]
  ) => Promise<TripleConstraint_semActsReturn>;
  TripleConstraint_Annotations: (
    annotations: Annotation[],
    transformed: AnnotationReturn[],
    parentStack: ParentTrace[]
  ) => Promise<TripleConstraint_AnnotationsReturn>;
}
