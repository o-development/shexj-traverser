import ShexJTraverser from "./shexJTraverser";
import kitchenSinkSchema from "shex-test/schemas/kitchenSink.json";
import * as dom from "dts-dom";
import { jsonld2graphobject } from "jsonld2graphobject";
import { circular, simple } from "./testShape";
import { Annotation } from "shexj";

export function iriToName(iri: string): string {
  try {
    const url = new URL(iri);
    if (url.hash) {
      return url.hash;
    } else {
      const splitPathname = url.pathname.split("/");
      return splitPathname[splitPathname.length - 1];
    }
  } catch (err) {
    return iri;
  }
}

export function toCamelCase(text: string) {
  return text
    .replace(/([-_ ]){1,}/g, " ")
    .split(/[-_ ]/)
    .reduce((cur, acc) => {
      return cur + acc[0].toUpperCase() + acc.substring(1);
    });
}

export function nameFromObject(obj: {
  id?: string;
  annotations?: Annotation[];
}): string | undefined {
  const labelAnnotationObject = obj.annotations?.find(
    (annotation) =>
      annotation.predicate === "http://www.w3.org/2000/01/rdf-schema#label"
  )?.object;
  if (labelAnnotationObject && typeof labelAnnotationObject === "string") {
    return toCamelCase(iriToName(labelAnnotationObject));
  } else if (
    labelAnnotationObject &&
    typeof labelAnnotationObject !== "string"
  ) {
    return toCamelCase(labelAnnotationObject.value);
  } else if (obj.id) {
    return toCamelCase(iriToName(obj.id));
  }
}

export function commentFromAnnotations(
  annotations?: Annotation[]
): string | undefined {
  const commentAnnotationObject = annotations?.find(
    (annotation) =>
      annotation.predicate === "http://www.w3.org/2000/01/rdf-schema#comment"
  )?.object;
  if (typeof commentAnnotationObject === "string") {
    // It's an IRI
    return commentAnnotationObject;
  } else {
    return commentAnnotationObject?.value;
  }
}

export const ShexJTypeTransformer = ShexJTraverser.createTransformer<{
  Schema: {
    return: dom.NamespaceDeclaration;
  };
  Shape: {
    return: dom.InterfaceDeclaration;
  };
  EachOf: {
    return: dom.ObjectType | dom.InterfaceDeclaration;
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
      _schema,
      transformedChildren
    ): Promise<dom.NamespaceDeclaration> => {
      const namespace = dom.create.namespace("");
      transformedChildren.shapes?.forEach((shape) => {
        if (
          typeof shape !== "string" &&
          (shape as dom.InterfaceDeclaration).kind === "interface"
        ) {
          namespace.members.push(shape as dom.InterfaceDeclaration);
        }
      });
      return namespace;
    },
  },
  Shape: {
    transformer: async (shape, transformedChildren) => {
      const shapeName = nameFromObject(shape) || "Shape";
      const newInterface = dom.create.interface(shapeName);
      if (
        typeof transformedChildren.expression !== "string" &&
        (transformedChildren.expression as dom.ObjectType).kind === "object"
      ) {
        newInterface.members.push(
          ...(transformedChildren.expression as dom.ObjectType).members
        );
      }
      return newInterface;
    },
  },
  EachOf: {
    transformer: async (eachOf, transformedChildren) => {
      const name = nameFromObject(eachOf);
      const objectType = name
        ? dom.create.interface(name)
        : dom.create.objectType([]);
      transformedChildren.expressions.forEach((expression) => {
        if (
          typeof expression !== "string" &&
          (expression as dom.PropertyDeclaration).kind === "property"
        ) {
          objectType.members.push(expression as dom.PropertyDeclaration);
        }
      });
      return objectType;
    },
  },
  TripleConstraint: {
    transformer: async (tripleConstraint, transformedChildren) => {
      const propertyName =
        nameFromObject(tripleConstraint) ||
        toCamelCase(iriToName(tripleConstraint.predicate));
      const isArray = tripleConstraint.max !== 1;
      const isOptional = tripleConstraint.min === 0;
      let type: dom.Type = dom.type.undefined;
      if (transformedChildren.valueExpr) {
        type = transformedChildren.valueExpr as dom.Type;
      }

      const propertyDeclaration = dom.create.property(
        propertyName,
        isArray ? dom.type.array(type) : type,
        isOptional ? dom.DeclarationFlags.Optional : dom.DeclarationFlags.None
      );
      propertyDeclaration.jsDocComment = commentFromAnnotations(
        tripleConstraint.annotations
      );
      return propertyDeclaration;
    },
  },
  NodeConstraint: {
    transformer: async (nodeConstraint, _transformedChildren) => {
      if (nodeConstraint.datatype) {
        switch (nodeConstraint.datatype) {
          case "http://www.w3.org/2001/XMLSchema#string":
          case "http://www.w3.org/2001/XMLSchema#ENTITIES":
          case "http://www.w3.org/2001/XMLSchema#ENTITY":
          case "http://www.w3.org/2001/XMLSchema#ID":
          case "http://www.w3.org/2001/XMLSchema#IDREF":
          case "http://www.w3.org/2001/XMLSchema#IDREFS":
          case "http://www.w3.org/2001/XMLSchema#language":
          case "http://www.w3.org/2001/XMLSchema#Name":
          case "http://www.w3.org/2001/XMLSchema#NCName":
          case "http://www.w3.org/2001/XMLSchema#NMTOKEN":
          case "http://www.w3.org/2001/XMLSchema#NMTOKENS":
          case "http://www.w3.org/2001/XMLSchema#normalizedString":
          case "http://www.w3.org/2001/XMLSchema#QName":
          case "http://www.w3.org/2001/XMLSchema#token":
            return dom.type.string;
          case "http://www.w3.org/2001/XMLSchema#date":
          case "http://www.w3.org/2001/XMLSchema#dateTime":
          case "http://www.w3.org/2001/XMLSchema#duration":
          case "http://www.w3.org/2001/XMLSchema#gDay":
          case "http://www.w3.org/2001/XMLSchema#gMonth":
          case "http://www.w3.org/2001/XMLSchema#gMonthDay":
          case "http://www.w3.org/2001/XMLSchema#gYear":
          case "http://www.w3.org/2001/XMLSchema#gYearMonth":
          case "http://www.w3.org/2001/XMLSchema#time":
            return dom.type.string;
          case "http://www.w3.org/2001/XMLSchema#byte":
          case "http://www.w3.org/2001/XMLSchema#decimal":
          case "http://www.w3.org/2001/XMLSchema#int":
          case "http://www.w3.org/2001/XMLSchema#integer":
          case "http://www.w3.org/2001/XMLSchema#long":
          case "http://www.w3.org/2001/XMLSchema#negativeInteger":
          case "http://www.w3.org/2001/XMLSchema#nonNegativeInteger":
          case "http://www.w3.org/2001/XMLSchema#nonPositiveInteger":
          case "http://www.w3.org/2001/XMLSchema#positiveInteger":
          case "http://www.w3.org/2001/XMLSchema#short":
          case "http://www.w3.org/2001/XMLSchema#unsignedLong":
          case "http://www.w3.org/2001/XMLSchema#unsignedInt":
          case "http://www.w3.org/2001/XMLSchema#unsignedShort":
          case "http://www.w3.org/2001/XMLSchema#unsignedByte":
            return dom.type.number;
          case "http://www.w3.org/2001/XMLSchema#boolean":
            return dom.type.boolean;
          case "http://www.w3.org/2001/XMLSchema#hexBinary":
            return dom.type.string;
          case "http://www.w3.org/2001/XMLSchema#anyURI":
            return dom.type.string;
          default:
            return dom.type.string;
        }
      }
      if (nodeConstraint.nodeKind) {
        return dom.type.string;
      }
      return dom.type.undefined;
    },
  },
});

async function run() {
  const result = await ShexJTypeTransformer.transform(
    await jsonld2graphobject({ "@id": "SCHEMA", ...simple }, "SCHEMA"),
    "Schema"
  );
  result.name = "circular";
  console.log("Final Result");
  console.log(result);
  console.log(dom.emit(result));
}
run();
