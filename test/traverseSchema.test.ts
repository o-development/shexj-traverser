import { Schema } from "../lib";
import { traverseShex } from "../lib";

const schema: Schema = {
  type: "Schema",
  base: "https://shaperepo.com/schemas/chat",
  "@context": "http://www.w3.org/ns/shex.jsonld",
  prefixes: {
    purl: "http://purl.org/dc/elements/1.1/",
    rdfs: "http://www.w3.org/2000/01/rdf-schema#",
    ns: "http://rdfs.org/sioc/ns#",
    terms: "http://purl.org/dc/terms/",
    foaf: "http://xmlns.com/foaf/0.1/",
  },
  shapes: {
    "https://shaperepo.com/schemas/chat#ChatMessageShape": {
      type: "Shape",
      expression: {
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://purl.org/dc/terms/created",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
            },
          },
          {
            type: "TripleConstraint",
            predicate: "http://rdfs.org/sioc/ns#content",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
          },
          {
            type: "TripleConstraint",
            predicate: "http://xmlns.com/foaf/0.1/maker",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
          },
        ],
      },
    },
  },
};

describe("traverseSchema", () => {
  it("Traverses a simple schema and returns the same schema", async () => {
    const resultSchema = await traverseShex(schema, {});
    expect(resultSchema).toEqual(schema);
  });

  it("Traverses a simple schema and executes special items", async () => {
    let numberOfTripleConstraints = 0;
    const result = await traverseShex(schema, {
      async TripleConstraint(tripleConstraint) {
        numberOfTripleConstraints++;
        return tripleConstraint;
      },
    });
    expect(result).toEqual(schema);
    expect(numberOfTripleConstraints).toBe(3);
  });

  it("Traverses a simple schema and makes modifications", async () => {
    const result = await traverseShex<
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    >(schema, {
      Schema: async (schema, transformmedChildren) => {
        return `Schema(${transformmedChildren.prefixes},${
          transformmedChildren.shapes
        },${transformmedChildren.start},${transformmedChildren.startActs?.join(
          ","
        )})`;
      },
      prefixes: async (prefixes) => {
        return `prefixes`;
      },
      SemAct: async (semAct) => {
        return `SemAct`;
      },
      shapeExpr: async (shapeExpr, transformmedChild) => {
        return `shapeExpr(${transformmedChild})`;
      },
      shapes: async (shapes, transformedChildren) => {
        return `shapes(${Object.entries(transformedChildren)
          .map(([key, value]) => `(${key}, ${value})`)
          .join(",")})`;
      },
      ShapeOr: async (shapeOr, transformmedChildren) => {
        return `ShapeOr(${transformmedChildren.shapeExprs})`;
      },
      ShapeAnd: async (shapeAnd, transformmedChildren) => {
        return `ShapeAnd(${transformmedChildren.shapeExprs})`;
      },
      ShapeNot: async (shapeNot, transformmedChild) => {
        return `ShapeNot(${transformmedChild.shapeExpr})`;
      },
      ShapeRef: async (shapeRef) => {
        return `ShapeRef`;
      },
      NodeConstraint: async (nodeConstraint, transformedChildren) => {
        return `NodeContraint(${transformedChildren.values?.join(",")})`;
      },
      Shape: async (shape, transformmedChildren) => {
        return `Shape(${transformmedChildren.annotations},${transformmedChildren.expression},${transformmedChildren.semActs})`;
      },
      valueSetValue: async (valueSetValue, transformmedChild) => {
        return `valueSetValue(${transformmedChild})`;
      },
      tripleExpr: async (tripleExpr, transformmedChild) => {
        return `tripleExpr(${transformmedChild})`;
      },
      Annotation: async (annotation) => {
        return `Annotation`;
      },
      EachOf: async (eachOf, transformedChildren) => {
        return `EachOf(${
          transformedChildren.annotations
        },${transformedChildren.expressions?.join(",")},${
          transformedChildren.semActs
        })`;
      },
      OneOf: async (oneOf, transformedChildren) => {
        return `OneOf(${
          transformedChildren.annotations
        },${transformedChildren.expressions?.join(",")},${
          transformedChildren.semActs
        })`;
      },
      TripleConstraint: async (tripleConstraint, transformmedChildren) => {
        return `TripleConstraint(${transformmedChildren.annotations},${transformmedChildren.semActs},${transformmedChildren.valueExpr})`;
      },
      ObjectLiteral: async (objectLiteral) => {
        return `ObjectLiteral`;
      },
      IriStem: async (iriStem) => {
        return `IriStem`;
      },
      IriStemRange: async (iriStemRange, transformedChildren) => {
        return `IriStemRange(${transformedChildren.exclusions.join(",")})`;
      },
      LiteralStem: async (literalStem) => {
        return `LiteralStem`;
      },
      LiteralStemRange: async (literalStemRange, transformedChildren) => {
        return `LiteralStemRange(${transformedChildren.exclusions.join(",")})`;
      },
      Language: async (language) => {
        return `Language`;
      },
      LanguageStem: async (languageStem) => {
        return `LanguageStem`;
      },
      LanguageStemRange: async (languageStemRange, transformedChildren) => {
        return `LanguageStemRange(${transformedChildren})`;
      },
      Annotations: async (annotations, transformedChildren) => {
        return `Annotations(${transformedChildren})`;
      },
      SemActs: async (semActs, transformedChildren) => {
        return `SemActs(${transformedChildren})`;
      },
    });
    expect(result).toBe(
      "Schema(prefixes,shapes((https://shaperepo.com/schemas/chat#ChatMessageShape, shapeExpr(Shape(undefined,tripleExpr(EachOf(undefined,tripleExpr(TripleConstraint(undefined,undefined,shapeExpr(NodeContraint(undefined)))),tripleExpr(TripleConstraint(undefined,undefined,shapeExpr(NodeContraint(undefined)))),tripleExpr(TripleConstraint(undefined,undefined,shapeExpr(NodeContraint(undefined)))),undefined)),undefined)))),undefined,undefined)"
    );
  });
});
