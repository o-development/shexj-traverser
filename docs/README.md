shexj-traverser / [Exports](modules.md)

# ShexJ Traverser

Traverse a ShexJ schema with custom functionality.

## Installation
```bash
npm i shexj-traverser
```

## API
See the [full API docs](docs/modules.md).

## Usage
```typescript
// Imports
import { traverseShex, Schema } from "shexj-traverser";

// Define a ShexJ Schema
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

/**
 * You can define methods called "transformers" that will trigger at
 * certain points while traversing the ShexJ Schema.
 *
 * In this example, we coulnt the number of tripleConstraints the
 * Schema has by including a transformer that increments the number
 * every time a TripleConstraint is encountered.
 */
async function countTripleConstraints() {
  let numberOfTripleConstraints = 0;
  await traverseShex(schema, {
    async TripleConstraint(tripleConstraint) {
      numberOfTripleConstraints++;
      return tripleConstraint;
    },
  });
  // Prints 3
  console.log(numberOfTripleConstraints);
}
countTripleConstraints();

/**
 * You can also build a new datastructure as you traverse the
 * ShexJ schema. This is achieved by returning a new value in the
 * transformer. By default, the return value for a transformer is
 * the same as the input value (for example, a TripleConstraint
 * transformer will return a TripleConstraint), but this can be
 * modified by changing the generics on the function.
 * 
 * In this example, we create a long string that represents the given
 * ShexJ Schema by changing all the return values to strings.
 */
async function shexJtoUselessString() {
  const result = await traverseShex<
    string, // Schema return type
    string, // prefixes return type
    string, // SemAct return type
    string, // shapeExpr return type
    string, // shapes return type
    string, // ShapesOr return type
    string, // ShapesAnd return type
    string, // ShapesNot return type
    string, // ShapeRef return type
    string, // NodeConstraint return type
    string, // Shape return type
    string, // valueSetValue return type
    string, // tripleExpr return type
    string, // Annotation return type
    string, // EachOf return type
    string, // OneOf return type
    string, // TripleConstraint return type
    string, // ObjectLiteral return type
    string, // IriStem return type
    string, // IriStemRange return type
    string, // LiteralStem return type
    string, // LiteralStemRange return type
    string, // Language return type
    string, // LanguageStem return type
    string // LanguageStemRange return type
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
      return `Shape(${transformmedChildren.annotations?.join(",")},${
        transformmedChildren.expression
      },${transformmedChildren.semActs?.join()})`;
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
      return `EachOf(${transformedChildren.annotations?.join(
        ","
      )},${transformedChildren.expressions?.join(
        ","
      )},${transformedChildren.semActs?.join(",")})`;
    },
    OneOf: async (oneOf, transformedChildren) => {
      return `OneOf(${transformedChildren.annotations?.join(
        ","
      )},${transformedChildren.expressions?.join(
        ","
      )},${transformedChildren.semActs?.join(",")})`;
    },
    TripleConstraint: async (tripleConstraint, transformmedChildren) => {
      return `TripleConstraint(${transformmedChildren.annotations?.join(
        ","
      )},${transformmedChildren.semActs?.join(",")},${
        transformmedChildren.valueExpr
      })`;
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
  });
  // Prints: Schema(prefixes,shapes((https://shaperepo.com/schemas/chat#ChatMessageShape, shapeExpr(Shape(undefined,tripleExpr(EachOf(undefined,tripleExpr(TripleConstraint(undefined,undefined,shapeExpr(NodeContraint(undefined)))),tripleExpr(TripleConstraint(undefined,undefined,shapeExpr(NodeContraint(undefined)))),tripleExpr(TripleConstraint(undefined,undefined,shapeExpr(NodeContraint(undefined)))),undefined)),undefined)))),undefined,undefined)
  console.log(result);
}
shexJtoUselessString();
```

## Liscense
MIT
