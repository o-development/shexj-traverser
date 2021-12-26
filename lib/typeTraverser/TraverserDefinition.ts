import { InterfaceType, TraverserTypes, UnionType } from ".";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TraverserDefinition<Types extends TraverserTypes<any>> = {
  [TypeField in keyof Types]: Types[TypeField] extends InterfaceType<
    keyof Types,
    any
  >
    ? {
        kind: "interface";
      } & (undefined extends Types[TypeField]["properties"]
        ? // eslint-disable-next-line @typescript-eslint/ban-types
          {}
        : {
            properties: {
              [PropertyField in keyof Types[TypeField]["properties"]]: {
                isArray: NonNullable<
                  Types[TypeField]["type"][PropertyField]
                > extends Array<any>
                  ? true
                  : false;
                isOptional: undefined extends Types[TypeField]["type"][PropertyField]
                  ? true
                  : false;
                typeName: Types[TypeField]["properties"][PropertyField];
              };
            };
          })
    : Types[TypeField] extends UnionType<keyof Types, any>
    ? {
        kind: "union";
        selector: (
          item: Types[TypeField]["type"]
        ) => Types[TypeField]["typeNames"];
      }
    : never;
};
