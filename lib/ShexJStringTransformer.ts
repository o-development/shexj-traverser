import ShexJTraverser from "./shexJTraverser";

export const ShexJStringTransformer = ShexJTraverser.createTransformer<{
  Schema: {
    return: string;
  };
}>({
  Schema: {
    transformer: async (originalData, childData): Promise<string> => {
      return "Schema";
    },
  },
  shapeExpr: undefined,
  ShapeOr: undefined,
  ShapeAnd: undefined,
  ShapeNot: undefined,
  ShapeExternal: undefined,
  NodeConstraint: undefined,
  valueSetValue: undefined,
  ObjectLiteral: undefined,
  IriStem: undefined,
  IriStemRange: undefined,
  LiteralStem: undefined,
  LiteralStemRange: undefined,
  Language: undefined,
  LanguageStem: undefined,
  LanguageStemRange: undefined,
  Wildcard: undefined,
  Shape: undefined,
  tripleExpr: undefined,
  EachOf: undefined,
  OneOf: undefined,
  TripleConstraint: undefined,
  SemAct: undefined,
  Annotation: undefined,
});
