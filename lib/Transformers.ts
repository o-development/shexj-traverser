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
  BNODE,
} from "shexj";

export interface ParentTrace {
  parent: unknown;
  type: string;
  via?: string;
  viaIndex?: number;
}

export interface TransformersReturn<OriginalData> {
  original: OriginalData;
  return: any;
}

export interface ObjectTypeTransformersReturn<OriginalData>
  extends TransformersReturn<OriginalData> {
  transformedReturn: {
    [Property in keyof OriginalData]: any;
  };
}

export interface UnionTypeTransformersReturn<OriginalData, TransformedKeys extends keyof TransformersReturns>
  extends TransformersReturn<OriginalData> {
    transformedKeys: TransformedKeys
  }

export type ObjectTypeTransformersReturnsMeta = {
  Schema: ObjectTypeTransformersReturn<Schema>;
  ShapeOr: ObjectTypeTransformersReturn<ShapeOr>;
  ShapeAnd: ObjectTypeTransformersReturn<ShapeAnd>;
  ShapeNot: ObjectTypeTransformersReturn<ShapeNot>;
  ShapeExternal: ObjectTypeTransformersReturn<ShapeExternal>;
  NodeConstraint: ObjectTypeTransformersReturn<NodeConstraint>;
  ObjectLiteral: ObjectTypeTransformersReturn<ObjectLiteral>;
  IriStem: ObjectTypeTransformersReturn<IriStem>;
  IriStemRange: ObjectTypeTransformersReturn<IriStemRange>;
  LiteralStem: ObjectTypeTransformersReturn<LiteralStem>;
  LiteralStemRange: ObjectTypeTransformersReturn<LiteralStemRange>;
  Language: ObjectTypeTransformersReturn<Language>;
  LanguageStem: ObjectTypeTransformersReturn<LanguageStem>;
  LanguageStemRange: ObjectTypeTransformersReturn<LanguageStemRange>;
  Wildcard: ObjectTypeTransformersReturn<Wildcard>;
  Shape: ObjectTypeTransformersReturn<Shape>;
  EachOf: ObjectTypeTransformersReturn<EachOf>;
  OneOf: ObjectTypeTransformersReturn<OneOf>;
  TripleConstraint: ObjectTypeTransformersReturn<TripleConstraint>;
  SemAct: ObjectTypeTransformersReturn<SemAct>;
  Annotation: ObjectTypeTransformersReturn<Annotation>;
};

export type UnionTypeTransformersReturnsMeta = {
  shapeExpr: UnionTypeTransformersReturn<shapeExpr, "ShapeOr" | "ShapeAnd">;
  valueSetValue: UnionTypeTransformersReturn<valueSetValue, "ObjectLiteral" | "IriStem">;
  tripleExpr: UnionTypeTransformersReturn<tripleExpr, "EachOf" | "OneOf">;
};

export type TransformersReturnsMeta = ObjectTypeTransformersReturnsMeta &
  UnionTypeTransformersReturnsMeta;

export type TransformersReturns = {
  [Property in keyof TransformersReturnsMeta]: Omit<
    TransformersReturnsMeta[Property],
    "original" | "transformedKeys"
  >;
};

export type UnionTypeTransformer<
  Returns extends TransformersReturns,
  UnionTypeTransformersReturnKey extends keyof UnionTypeTransformersReturnsMeta,
  TransformedTypes
> = (
  originalData: TransformersReturnsMeta[UnionTypeTransformersReturnKey]["original"],
  transformed: TransformedTypes,
  parentStack: ParentTrace[]
) => Promise<Returns[UnionTypeTransformersReturnKey]["return"]>;

export type GetReturnType<
  Returns extends TransformersReturns,
  TransformerKey extends keyof TransformersReturns
> = Returns[TransformerKey]["return"];

export type GetDefaultObjectTypeReturn<OriginalType> = {
  return: OriginalType;
  transformedReturn: OriginalType;
};

type Transformers<
  Returns extends TransformersReturns = {
    Schema: GetDefaultObjectTypeReturn<Schema>;
    ShapeOr: GetDefaultObjectTypeReturn<ShapeOr>;
    ShapeAnd: GetDefaultObjectTypeReturn<ShapeAnd>;
    ShapeNot: GetDefaultObjectTypeReturn<ShapeNot>;
    ShapeExternal: GetDefaultObjectTypeReturn<ShapeExternal>;
    NodeConstraint: GetDefaultObjectTypeReturn<NodeConstraint>;
    ObjectLiteral: GetDefaultObjectTypeReturn<ObjectLiteral>;
    IriStem: GetDefaultObjectTypeReturn<IriStem>;
    IriStemRange: GetDefaultObjectTypeReturn<IriStemRange>;
    LiteralStem: GetDefaultObjectTypeReturn<LiteralStem>;
    LiteralStemRange: GetDefaultObjectTypeReturn<LiteralStemRange>;
    Language: GetDefaultObjectTypeReturn<Language>;
    LanguageStem: GetDefaultObjectTypeReturn<LanguageStem>;
    LanguageStemRange: GetDefaultObjectTypeReturn<LanguageStemRange>;
    Wildcard: GetDefaultObjectTypeReturn<Wildcard>;
    Shape: GetDefaultObjectTypeReturn<Shape>;
    EachOf: GetDefaultObjectTypeReturn<EachOf>;
    OneOf: GetDefaultObjectTypeReturn<OneOf>;
    TripleConstraint: GetDefaultObjectTypeReturn<TripleConstraint>;
    SemAct: GetDefaultObjectTypeReturn<SemAct>;
    Annotation: GetDefaultObjectTypeReturn<Annotation>;
    shapeExpr: {
      return: shapeExpr;
      transformedReturn:
        | ShapeOr
        | ShapeAnd
        | ShapeNot
        | NodeConstraint
        | Shape
        | Shape
        | ShapeExternal
        | shapeExprRef;
    };
    valueSetValue: {
      return: valueSetValue;
      transformedReturn: ObjectLiteral;
    };
    tripleExpr: {
      return: tripleExpr;
      transformedReturn: string;
    };
  }
> = {
  [Property in keyof ObjectTypeTransformersReturnsMeta]: (
    originalData: TransformersReturnsMeta[Property]["original"],
    transformed: Returns[Property]["transformedReturn"],
    parentStack: ParentTrace[]
  ) => Promise<Returns[Property]["return"]>;
} & {
  [Property in keyof UnionTypeTransformersReturnsMeta]: (
    originalData: UnionTypeTransformersReturnsMeta[Property]["original"],
    transformed: GetReturnType<Returns, >
  )
};

export default Transformers;
