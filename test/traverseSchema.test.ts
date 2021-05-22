import { Schema } from "../lib/shexTypes";
import traverseSchema from "../lib/traversers/traverseSchema";
import * as dom from "dts-dom";
import Transformers from "../lib/Transformers";
import traverseShex from "../lib/traverseShex";

const schema: Schema = {
  type: "Schema",
  base: "https://shaperepo.com/schemas/longChat",
  "@context": "http://www.w3.org/ns/shex.jsonld",
  prefixes: {
    srs: "https://shaperepo.com/schemas/longChat#",
    xsd: "http://www.w3.org/2001/XMLSchema#",
    mee: "http://www.w3.org/ns/pim/meeting#",
    purl: "http://purl.org/dc/elements/1.1/",
    flow: "http://www.w3.org/2005/01/wf/flow#",
    rdfs: "http://www.w3.org/2000/01/rdf-schema#",
    ns: "http://rdfs.org/sioc/ns#",
    terms: "http://purl.org/dc/terms/",
    foaf: "http://xmlns.com/foaf/0.1/",
    ic: "http://www.w3.org/2002/12/cal/ical#",
    ui: "http://www.w3.org/ns/ui#",
  },
  shapes: {
    "https://shaperepo.com/schemas/longChat#ChatShape": {
      type: "Shape",
      expression: {
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            valueExpr: {
              type: "NodeConstraint",
              values: ["http://www.w3.org/ns/pim/meeting#LongChat"],
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Defines the type of the chat as a LongChat",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "http://purl.org/dc/elements/1.1/author",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "The WebId of the entity that created this chat",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "http://purl.org/dc/elements/1.1/created",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "The date and time the chat was created",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "http://purl.org/dc/elements/1.1/title",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "The title of the chat",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/2005/01/wf/flow#participation",
            valueExpr: {
              type: "ShapeRef",
              reference:
                "https://shaperepo.com/schemas/longChat#ChatParticipationShape",
            },
            min: 0,
            max: -1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "A list of people participating in this chat",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/ns/ui#sharedPreferences",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "Chat preferences",
                },
              },
            ],
          },
        ],
      },
      extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
    },
    "https://shaperepo.com/schemas/longChat#ChatParticipationShape": {
      type: "Shape",
      expression: {
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/2002/12/cal/ical#dtstart",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "The date and time this individual began participating in the chat.",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/2005/01/wf/flow#participant",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "The WebId of the participant",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "http://www.w3.org/ns/ui#backgroundColor",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            min: 0,
            max: 1,
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value:
                    "The background color of the participant's chat bubbles",
                },
              },
            ],
          },
        ],
      },
    },
    "https://shaperepo.com/schemas/longChat#ChatMessageListShape": {
      type: "Shape",
      expression: {
        type: "TripleConstraint",
        predicate: "http://www.w3.org/2005/01/wf/flow#message",
        valueExpr: {
          type: "ShapeRef",
          reference: "https://shaperepo.com/schemas/longChat#ChatMessageShape",
        },
        min: 0,
        max: -1,
        annotations: [
          {
            type: "Annotation",
            predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
            object: {
              value: "A list of messages in the chat",
            },
          },
        ],
      },
    },
    "https://shaperepo.com/schemas/longChat#ChatMessageShape": {
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
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "The date and time this message was posted.",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "http://rdfs.org/sioc/ns#content",
            valueExpr: {
              type: "NodeConstraint",
              datatype: "http://www.w3.org/2001/XMLSchema#string",
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "The text content of the message",
                },
              },
            ],
          },
          {
            type: "TripleConstraint",
            predicate: "http://xmlns.com/foaf/0.1/maker",
            valueExpr: {
              type: "NodeConstraint",
              nodeKind: "iri",
            },
            annotations: [
              {
                type: "Annotation",
                predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                object: {
                  value: "The WebId of the person who sent the message.",
                },
              },
            ],
          },
        ],
      },
    },
  },
};

const typescriptTransformers: Partial<Transformers<
  dom.NamespaceDeclaration
>> = {
  Schema: (
    schema,
    transformmedChildren
  ): Promise<dom.NamespaceDeclaration> => {
    throw new Error("Not Implemented");
  },
  
};

describe("traverseSchema", () => {
  it("Can Work for building a thing", () => {
    traverseShex(schema, typescriptTransformers);
  });
});
