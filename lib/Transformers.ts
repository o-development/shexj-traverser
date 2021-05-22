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
  shapeExprObject,
} from "./shexTypes";

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
  LanguageStemRangeReturn = LanguageStemRange
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
  prefixes: (prefixes: prefixes) => Promise<prefixesReturn>;
  SemAct: (semAct: SemAct) => Promise<SemActReturn>;
  shapeExpr: (
    shapeExpr: shapeExpr,
    transformmedChild:
      | string
      | ShapeOrReturn
      | ShapeAndReturn
      | ShapeNotReturn
      | NodeConstraintReturn
      | ShapeReturn
      | ShapeRefReturn
  ) => Promise<shapeExprReturn>;
  shapes: (
    shapes: shapes,
    transformmedChildren: Record<string, shapeExprReturn>
  ) => Promise<shapesReturn>;
  ShapeOr: (
    shapeOr: ShapeOr,
    transformmedChildren: { shapeExprs: shapeExprReturn[] }
  ) => Promise<ShapeOrReturn>;
  ShapeAnd: (
    shapeAnd: ShapeAnd,
    transformmedChildren: { shapeExprs: shapeExprReturn[] }
  ) => Promise<ShapeAndReturn>;
  ShapeNot: (
    shapeNot: ShapeNot,
    transformmedChild: { shapeExpr: shapeExprReturn }
  ) => Promise<ShapeNotReturn>;
  ShapeRef: (shapeRef: ShapeRef) => Promise<ShapeRefReturn>;
  NodeConstraint: (
    nodeConstraint: NodeConstraint,
    transformmedChildren: { values?: valueSetValueReturn[] }
  ) => Promise<NodeConstraintReturn>;
  Shape: (
    shape: Shape,
    transformmedChildren: {
      expression?: tripleExprReturn;
      semActs?: SemActReturn[];
      annotations?: AnnotationReturn[];
    }
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
      | LanguageStemRangeReturn
  ) => Promise<valueSetValueReturn>;
  tripleExpr: (
    tripleExpr: tripleExpr,
    transformmedChild:
      | string
      | EachOfReturn
      | OneOfReturn
      | TripleConstraintReturn
  ) => Promise<tripleExprReturn>;
  Annotation: (annotation: Annotation) => Promise<AnnotationReturn>;
  EachOf: (
    eachOf: EachOf,
    transformmedChildren: {
      expressions?: tripleExprReturn[];
      semActs?: SemActReturn[];
      annotations?: AnnotationReturn[];
    }
  ) => Promise<EachOfReturn>;
  OneOf: (
    oneOf: OneOf,
    transformmedChildren: {
      expressions?: tripleExprReturn[];
      semActs?: SemActReturn[];
      annotations?: AnnotationReturn[];
    }
  ) => Promise<OneOfReturn>;
  TripleConstraint: (
    TripleConstraint: TripleConstraint,
    transformmedChildren: {
      valueExpr?: shapeExprReturn;
      semActs?: SemActReturn[];
      annotations?: AnnotationReturn[];
    }
  ) => Promise<TripleConstraintReturn>;
  ObjectLiteral: (objectLiteral: ObjectLiteral) => Promise<ObjectLiteralReturn>;
  IriStem: (iriStem: IriStem) => Promise<IriStemReturn>;
  IriStemRange: (
    iriStemRange: IriStemRange,
    transformmedChildren: { exclusions: (string | IriStemReturn)[] }
  ) => Promise<IriStemRangeReturn>;
  LiteralStem: (literalStem: LiteralStem) => Promise<LiteralStemReturn>;
  LiteralStemRange: (
    literalStemRange: LiteralStemRange,
    transformmedChildren: { exclusions: (string | LiteralStemReturn)[] }
  ) => Promise<LiteralStemRangeReturn>;
  Language: (language: Language) => Promise<LanguageReturn>;
  LanguageStem: (languageStem: LanguageStem) => Promise<LanguageStemReturn>;
  LanguageStemRange: (
    languageStemRange: LanguageStemRange,
    transformmedChildren: { exclusions: (string | LanguageStemReturn)[] }
  ) => Promise<LanguageStemRangeReturn>;
}
