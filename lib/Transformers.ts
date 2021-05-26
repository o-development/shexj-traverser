import {
  Schema,
  prefixes,
  SemAct,
  shapeExpr,
  shapes,
  ShapeOr,
  ShapeAnd,
  ShapeNot,
  ShapeRef,
  NodeConstraint,
  Shape,
  valueSetValue,
  tripleExpr,
  Annotation,
  EachOf,
  OneOf,
  TripleConstraint,
  ObjectLiteral,
  IriStem,
  IriStemRange,
  LiteralStem,
  LiteralStemRange,
  Language,
  LanguageStem,
  LanguageStemRange,
} from "./shexTypes";

export interface ParentTrace {
  parent: unknown;
  type: string;
  via?: string;
  viaIndex?: number;
}

export default interface Transformers<
  SchemaReturn = Schema,
  prefixesReturn = prefixes,
  SemActReturn = SemAct,
  shapeExprReturn = shapeExpr,
  shapesReturn = shapes,
  ShapeOrReturn = ShapeOr,
  ShapeAndReturn = ShapeAnd,
  ShapeNotReturn = ShapeNot,
  ShapeRefReturn = ShapeRef,
  NodeConstraintReturn = NodeConstraint,
  ShapeReturn = Shape,
  valueSetValueReturn = valueSetValue,
  tripleExprReturn = tripleExpr,
  AnnotationReturn = Annotation,
  EachOfReturn = EachOf,
  OneOfReturn = OneOf,
  TripleConstraintReturn = TripleConstraint,
  ObjectLiteralReturn = ObjectLiteral,
  IriStemReturn = IriStem,
  IriStemRangeReturn = IriStemRange,
  LiteralStemReturn = LiteralStem,
  LiteralStemRangeReturn = LiteralStemRange,
  LanguageReturn = Language,
  LanguageStemReturn = LanguageStem,
  LanguageStemRangeReturn = LanguageStemRange,
  AnnotationsReturn = AnnotationReturn[],
  SemActsReturn = SemActReturn[]
> {
  Schema: (
    schema: Schema,
    transformmedChildren: {
      prefixes?: prefixesReturn;
      startActs?: SemActReturn[];
      start?: shapeExprReturn;
      shapes?: shapesReturn;
    }
  ) => Promise<SchemaReturn>;
  prefixes: (
    prefixes: prefixes,
    parentStack: ParentTrace[]
  ) => Promise<prefixesReturn>;
  SemAct: (semAct: SemAct, parentStack: ParentTrace[]) => Promise<SemActReturn>;
  shapeExpr: (
    shapeExpr: shapeExpr,
    transformmedChild:
      | string
      | ShapeOrReturn
      | ShapeAndReturn
      | ShapeNotReturn
      | NodeConstraintReturn
      | ShapeReturn
      | ShapeRefReturn,
    parentStack: ParentTrace[]
  ) => Promise<shapeExprReturn>;
  shapes: (
    shapes: shapes,
    transformmedChildren: Record<string, shapeExprReturn>,
    parentStack: ParentTrace[]
  ) => Promise<shapesReturn>;
  ShapeOr: (
    shapeOr: ShapeOr,
    transformmedChildren: { shapeExprs: shapeExprReturn[] },
    parentStack: ParentTrace[]
  ) => Promise<ShapeOrReturn>;
  ShapeAnd: (
    shapeAnd: ShapeAnd,
    transformmedChildren: { shapeExprs: shapeExprReturn[] },
    parentStack: ParentTrace[]
  ) => Promise<ShapeAndReturn>;
  ShapeNot: (
    shapeNot: ShapeNot,
    transformmedChild: { shapeExpr: shapeExprReturn },
    parentStack: ParentTrace[]
  ) => Promise<ShapeNotReturn>;
  ShapeRef: (shapeRef: ShapeRef, parents: unknown[]) => Promise<ShapeRefReturn>;
  NodeConstraint: (
    nodeConstraint: NodeConstraint,
    transformmedChildren: { values?: valueSetValueReturn[] },
    parentStack: ParentTrace[]
  ) => Promise<NodeConstraintReturn>;
  Shape: (
    shape: Shape,
    transformmedChildren: {
      expression?: tripleExprReturn;
      semActs?: SemActsReturn;
      annotations?: AnnotationsReturn;
    },
    parentStack: ParentTrace[]
  ) => Promise<ShapeReturn>;
  valueSetValue: (
    valueSetValue: valueSetValue,
    transformmedChild:
      | string
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
    transformmedChild:
      | string
      | EachOfReturn
      | OneOfReturn
      | TripleConstraintReturn,
    parentStack: ParentTrace[]
  ) => Promise<tripleExprReturn>;
  Annotation: (
    annotation: Annotation,
    parentStack: ParentTrace[]
  ) => Promise<AnnotationReturn>;
  EachOf: (
    eachOf: EachOf,
    transformmedChildren: {
      expressions?: tripleExprReturn[];
      semActs?: SemActsReturn;
      annotations?: AnnotationsReturn;
    },
    parentStack: ParentTrace[]
  ) => Promise<EachOfReturn>;
  OneOf: (
    oneOf: OneOf,
    transformmedChildren: {
      expressions?: tripleExprReturn[];
      semActs?: SemActsReturn;
      annotations?: AnnotationsReturn;
    },
    parentStack: ParentTrace[]
  ) => Promise<OneOfReturn>;
  TripleConstraint: (
    TripleConstraint: TripleConstraint,
    transformmedChildren: {
      valueExpr?: shapeExprReturn;
      semActs?: SemActsReturn;
      annotations?: AnnotationsReturn;
    },
    parentStack: ParentTrace[]
  ) => Promise<TripleConstraintReturn>;
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
    transformmedChildren: { exclusions: (string | IriStemReturn)[] },
    parentStack: ParentTrace[]
  ) => Promise<IriStemRangeReturn>;
  LiteralStem: (
    literalStem: LiteralStem,
    parentStack: ParentTrace[]
  ) => Promise<LiteralStemReturn>;
  LiteralStemRange: (
    literalStemRange: LiteralStemRange,
    transformmedChildren: { exclusions: (string | LiteralStemReturn)[] },
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
    transformmedChildren: { exclusions: (string | LanguageStemReturn)[] },
    parentStack: ParentTrace[]
  ) => Promise<LanguageStemRangeReturn>;
  Annotations: (
    annotations: Annotation[],
    transformmed: AnnotationReturn[],
    parentStack: ParentTrace[]
  ) => Promise<AnnotationsReturn>;
  SemActs: (
    semActs: SemAct[],
    transformmed: SemActReturn[],
    parentStack: ParentTrace[]
  ) => Promise<SemActsReturn>;
}
