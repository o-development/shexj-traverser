import { Schema } from "shexj";
import { traverseShex } from "../lib";
import allSchema from "shex-test/schemas/_all.json";

const schema: Schema = allSchema as Schema;

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
    expect(numberOfTripleConstraints).toBe(21);
  });

  it("Traverses a simple schema and makes modifications", async () => {
    const result = await traverseShex<{
      Schema: 
    }>(schema, {
      
    });
    expect(result).toBe(
      `Schema(Schema_startActs(SemAct,SemAct),Schema_startActs(SemAct,SemAct),Schema_shapes(shapeExpr(Shape(Shape_expression(tripleExpr(EachOf(EachOf_expressions(tripleExpr(TripleConstraint(undefined,undefined,undefined)),tripleExpr(TripleConstraint(undefined,undefined,undefined)),tripleExpr(TripleConstraint(undefined,undefined,undefined))),undefined,undefined))),undefined,undefined)),shapeExpr(Shape(Shape_expression(tripleExpr(EachOf(EachOf_expressions(tripleExpr(TripleConstraint(undefined,undefined,undefined)),tripleExpr(TripleConstraint(undefined,undefined,undefined)),tripleExpr(TripleConstraint(undefined,undefined,undefined))),undefined,undefined))),undefined,undefined)),shapeExpr(NodeConstraint(undefined)),shapeExpr(ShapeAnd(ShapeAnd_shapeExprs(shapeExpr(NodeConstraint(NodeConstraint_values(valueSetValue(http://a.example/a1),valueSetValue(IriStemRange(IriStemRange_exclusions(IriStem,http://all.example/b)))))),shapeExpr(NodeConstraint(undefined))))),shapeExpr(Shape(Shape_expression(tripleExpr(EachOf(EachOf_expressions(tripleExpr(http://all.example/S1e),tripleExpr(TripleConstraint(undefined,undefined,undefined)),tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(NodeConstraint(undefined))),undefined,undefined)),tripleExpr(OneOf(OneOf_expressions(tripleExpr(EachOf(EachOf_expressions(tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(NodeConstraint(undefined))),undefined,undefined)),tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(NodeConstraint(undefined))),undefined,undefined)),tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(http://all.example/S5)),undefined,undefined))),undefined,undefined)),tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(ShapeAnd(ShapeAnd_shapeExprs(shapeExpr(NodeConstraint(undefined)),shapeExpr(http://all.example/S5))))),undefined,undefined)),tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(ShapeOr(ShapeOr_shapeExprs(shapeExpr(ShapeAnd(ShapeAnd_shapeExprs(shapeExpr(NodeConstraint(undefined)),shapeExpr(http://all.example/S5)))),shapeExpr(ShapeAnd(ShapeAnd_shapeExprs(shapeExpr(NodeConstraint(undefined)),shapeExpr(http://all.example/S5)))))))),undefined,undefined)),tripleExpr(EachOf(EachOf_expressions(tripleExpr(OneOf(OneOf_expressions(tripleExpr(EachOf(EachOf_expressions(tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(Shape(Shape_expression(tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(NodeConstraint(NodeConstraint_values(valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(http://all.example/),valueSetValue(http://all.example/val1),valueSetValue(http://all.example/),valueSetValue(scheme:!$%25&amp;'()*+,-./0123456789:/@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~?#),valueSetValue(http://a.example/p1),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral),valueSetValue(ObjectLiteral))))),undefined,undefined))),undefined,undefined))),TripleConstraint_valueExpr(SemAct),undefined)),tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(NodeConstraint(undefined))),TripleConstraint_valueExpr(SemAct),TripleConstraint_Annotations(Annotation,Annotation,Annotation)))),undefined,undefined)),tripleExpr(EachOf(EachOf_expressions(tripleExpr(TripleConstraint(undefined,TripleConstraint_valueExpr(SemAct),undefined)),tripleExpr(TripleConstraint(undefined,TripleConstraint_valueExpr(SemAct),undefined))),undefined,undefined))),undefined,undefined)),tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(NodeConstraint(undefined))),undefined,undefined))),undefined,undefined))),undefined,undefined)),tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(http://all.example/vs1)),undefined,undefined)),tripleExpr(TripleConstraint(TripleConstraint_valueExpr(shapeExpr(NodeConstraint(NodeConstraint_values(valueSetValue(IriStemRange(IriStemRange_exclusions(IriStem,http://all.example/b))))))),TripleConstraint_valueExpr(SemAct,SemAct),undefined))),undefined,undefined))),undefined,undefined)),shapeExpr(NodeConstraint(undefined)),shapeExpr(Shape(Shape_expression(tripleExpr(EachOf(EachOf_expressions(tripleExpr(http://all.example/S1e),tripleExpr(http://all.example/S2e)),undefined,undefined))),undefined,undefined)),shapeExpr(Shape(Shape_expression(tripleExpr(_:a·̀ͯ‿.⁀e)),undefined,undefined))))`
    );
  });
});
