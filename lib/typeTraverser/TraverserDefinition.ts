/* eslint-disable @typescript-eslint/no-explicit-any */
import { InterfaceType, TraverserTypes, UnionType } from ".";

export type InterfaceTraverserDefinition<Type extends InterfaceType<any>> = {
  kind: "interface";
  properties: {
    [PropertyField in keyof Type["properties"]]: {
      isArray: NonNullable<Type["type"][PropertyField]> extends Array<any>
        ? true
        : false;
      isOptional: undefined extends Type["type"][PropertyField] ? true : false;
      typeName: Type["properties"][PropertyField];
    };
  };
};

export type UnionTraverserDefinition<Type extends UnionType<any>> = {
  kind: "union";
  selector: (item: Type["type"]) => Type["typeNames"];
};

export type TraverserDefinition<Types extends TraverserTypes<any>> = {
  [TypeField in keyof Types]: Types[TypeField] extends InterfaceType<
    keyof Types
  >
    ? InterfaceTraverserDefinition<Types[TypeField]>
    : Types[TypeField] extends UnionType<keyof Types>
    ? UnionTraverserDefinition<Types[TypeField]>
    : never;
};
