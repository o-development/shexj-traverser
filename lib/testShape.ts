import { Schema } from "shexj";

export const circular: Schema = {
  "@context": "http://www.w3.org/ns/shex.jsonld",
  type: "Schema",
  shapes: [
    {
      id: "http://example.com/parent",
      type: "Shape",
      expression: {
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://example.com/hasChild",
            valueExpr: "http://example.com/child",
          },
        ],
      },
    },
    {
      id: "http://example.com/child",
      type: "Shape",
      expression: {
        type: "EachOf",
        expressions: [
          {
            type: "TripleConstraint",
            predicate: "http://example.com/hasParent",
            valueExpr: {
              type: "NodeConstraint",
              values: ["http://ex.example/#Issue"],
            },
          },
        ],
      },
    },
  ],
};
