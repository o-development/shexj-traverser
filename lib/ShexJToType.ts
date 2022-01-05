import ShexJTraverser from "./shexJTraverser";
import kitchenSinkSchema from "shex-test/schemas/kitchenSink.json";
import * as dom from "dts-dom";
import { jsonld2graphobject } from "jsonld2graphobject";
import { circular } from "./testShape";

export const ShexJTypeTransformer = ShexJTraverser.createTransformer<{
  Schema: {
    return: dom.NamespaceDeclaration;
  };
  Shape: {
    return: dom.InterfaceDeclaration | dom.UnionType | dom.IntersectionType;
  };
  ShapeOr: {
    return: dom.InterfaceDeclaration | dom.UnionType | dom.IntersectionType;
  };
  ShapeAnd: {
    return: dom.InterfaceDeclaration | dom.UnionType | dom.IntersectionType;
  };
  ShapeNot: {
    return: dom.InterfaceDeclaration | dom.UnionType | dom.IntersectionType;
  };
  ShapeExternal: {
    return: dom.InterfaceDeclaration | dom.UnionType | dom.IntersectionType;
  };
  EachOf: {
    return: dom.InterfaceDeclaration | dom.IntersectionType;
  };
  OneOf: {
    return: dom.UnionType;
  };
  TripleConstraint: {
    return: dom.PropertyDeclaration;
  };
  NodeConstraint: {
    return: dom.Type;
  };
}>({
  Schema: {
    transformer: async (
      schema,
      transformedChildren
    ): Promise<dom.NamespaceDeclaration> => {
      const namespace = dom.create.namespace("namespace");
      console.log(transformedChildren.shapes);
      transformedChildren.shapes.forEach((shape, index) => {
        namespace.members.push(
          dom.create.alias(`typePlaceholder${index}`, shape)
        );
      });
      return namespace;
    },
  },

  Shape: {
    transformer: async (shape, transformedChildren) => {
      console.log("In Shape Transformer");
      if (transformedChildren.expression.kind === "property") {
        const newInterface = dom.create.interface(
          "yetAnotherAnotherPlaceholder"
        );
        newInterface.members.push(transformedChildren.expression);
        return newInterface;
      }
      return transformedChildren.expression;
    },
  },
  EachOf: {
    transformer: async (
      eachOf,
      transformedChildren
    ): Promise<dom.InterfaceDeclaration | dom.IntersectionType> => {
      const newInterface = dom.create.interface("anotherPlaceholder");
      const nonPropertyExpressions: (dom.UnionType | dom.IntersectionType)[] =
        [];
      transformedChildren.expressions.forEach((expression) => {
        if (expression.kind === "property") {
          newInterface.members.push(expression);
        } else if (expression.kind === "interface") {
          newInterface.members.push(...expression.members);
        } else {
          nonPropertyExpressions.push(expression);
        }
      });
      if (nonPropertyExpressions.length === 0) {
        return newInterface;
      }
      return dom.create.intersection([newInterface, ...nonPropertyExpressions]);
    },
  },
  OneOf: {
    transformer: async (oneOf, transformedChildren): Promise<dom.UnionType> => {
      const newUnion = dom.create.union([]);
      transformedChildren.expressions.forEach((child) => {
        let actualChild;
        if (child.kind === "property") {
          const newInterface = dom.create.interface("yetAnotherPlaceholder");
          newInterface.members.push(child);
          actualChild = newInterface;
        } else {
          actualChild = child;
        }
        newUnion.members.push(actualChild);
      });
      return newUnion;
    },
  },
  TripleConstraint: {
    transformer: async (
      tripleConstraint,
      transformedChildren
    ): Promise<dom.PropertyDeclaration> => {
      return dom.create.property(
        tripleConstraint.predicate,
        transformedChildren.valueExpr
      );
    },
  },
  NodeConstraint: {
    transformer: async (
      nodeConstraint,
      transformedChildren
    ): Promise<dom.Type> => {
      return dom.type.string;
    },
  },
});

async function run() {
  const result = await ShexJTypeTransformer.transform(
    await jsonld2graphobject({ "@id": "SCHEMA", ...circular }, "SCHEMA"),
    "Schema"
  );
  console.log("Final Result");
  console.log(result);
  console.log(dom.emit(result));
}
run();
