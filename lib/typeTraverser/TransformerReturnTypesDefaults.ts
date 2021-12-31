/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseInputReturnType,
  InterfaceInputReturnType,
  InterfacePropertiesInputReturnType,
  InterfaceType,
  TransformerInputReturnTypes,
  TraverserTypes,
  UnionInputReturnType,
  UnionType,
} from ".";

// export type RecursivelyFindReturnType<
//   Types extends TraverserTypes<any>,
//   InputReturnTypes extends TransformerInputReturnTypes<Types>,
//   KeyToFind extends keyof Types,
//   KeysVisited extends keyof Types,
// > = KeyToFind extends KeysVisited ? Types[KeyToFind]["type"] : (
//   InputReturnTypes[KeyToFind] extends BaseInputReturnType<Types, Types[KeyToFind]> ?

// )

// export type InterfaceReturnTypeDefault<
//   Types extends TraverserTypes<any>,
//   Type extends InterfaceType<keyof Types, any>,
//   InputReturnTypes extends TransformerInputReturnTypes<Types>
// > = {
//   return: Type["type"];
//   properties: {
//     [PropertyName in keyof Type["properties"]]: InputReturnTypes[Type["properties"][PropertyName]] extends NonNullable<
//       InterfaceInputReturnType<Type>
//     >
//       ? InputReturnTypes[Type["properties"][PropertyName]]["return"]
//       : Types[Type["properties"][PropertyName]]["type"];
//   };
// };

// export type UnionReturnTypeDefault<Type extends UnionType<any, any>> = {
//   return: Type["type"];
// };

// export type TransformerReturnTypesDefaults<
//   Types extends TraverserTypes<any>,
//   InputReturnTypes extends TransformerInputReturnTypes<Types>
// > = {
//   [TypeName in keyof Types]: Types[TypeName] extends InterfaceType<
//     keyof Types,
//     any
//   >
//     ? InterfaceReturnTypeDefault<Types, Types[TypeName], InputReturnTypes>
//     : Types[TypeName] extends UnionType<keyof Types, any>
//     ? UnionReturnTypeDefault<Types[TypeName]>
//     : never;
// };

// export type ApplyInterfaceReturnTypeDefault<
//   Types extends TraverserTypes<any>,
//   Type extends InterfaceType<keyof Types, any>,
//   InputReturnTypes extends TransformerInputReturnTypes<Types>,
//   InputReturnType extends InterfaceInputReturnType<Type>
// > = {
//   return: InputReturnType["return"];
//   properties: InputReturnType["properties"] extends NonNullable<
//     InterfaceInputReturnType<Type>["properties"]
//   >
//     ? {
//         [PropertyName in keyof Type["properties"]]: undefined extends InputReturnType["properties"][PropertyName]
//           ? InterfaceReturnTypeDefault<
//               Types,
//               Type,
//               InputReturnTypes
//             >["properties"][PropertyName]
//           : InputReturnType["properties"][PropertyName];
//       }
//     : InterfaceReturnTypeDefault<Types, Type, InputReturnTypes>["properties"];
// };

export type RecursivelyFindReturnType<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  TypeNameToFind extends keyof Types,
  VisitedTypeNames extends keyof Types
> = TypeNameToFind extends VisitedTypeNames
  ? Types[TypeNameToFind]["type"]
  : InputReturnTypes[TypeNameToFind] extends BaseInputReturnType<
      Types,
      Types[TypeNameToFind]
    >
  ? InputReturnTypes[TypeNameToFind]["return"]
  : ApplyTransformerReturnTypeDefault<
      Types,
      InputReturnTypes,
      TypeNameToFind,
      VisitedTypeNames | TypeNameToFind
    >["return"];

// This is here and not inside of the
export type HackilyApplyConditionalPropertyDefaults<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  VisitedTypeNames extends keyof Types,
  Type extends InterfaceType<keyof Types, any>,
  PropertiesInputRetunType extends InterfacePropertiesInputReturnType<Type>,
  PropertyName extends keyof Types,
  FallbackKey extends keyof Types
> = undefined extends PropertiesInputRetunType["properties"][PropertyName]
  ? PropertiesInputRetunType["properties"][PropertyName]
  : RecursivelyFindReturnType<
      Types,
      InputReturnTypes,
      FallbackKey,
      VisitedTypeNames
    >;

export type HackilyApplyConditionalPropertiesDefaults<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  VisitedTypeNames extends keyof Types,
  Type extends InterfaceType<keyof Types, any>,
  InputReturnType extends InterfaceInputReturnType<Type>,
  PropertyName extends keyof Types,
  FallbackKey extends keyof Types
> = InputReturnType["properties"] extends InterfacePropertiesInputReturnType<Type>
  ? HackilyApplyConditionalPropertyDefaults<
      Types,
      InputReturnTypes,
      VisitedTypeNames,
      Type,
      InputReturnType["properties"],
      PropertyName,
      FallbackKey
    >
  : RecursivelyFindReturnType<
      Types,
      InputReturnTypes,
      FallbackKey,
      VisitedTypeNames
    >;

export type ApplyTransformerInterfacePropertiesReturnTypeDefault<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  TypeName extends keyof Types,
  VisitedTypeNames extends keyof Types
> = Types[TypeName] extends InterfaceType<keyof Types, any>
  ? {
      [PropertyName in keyof Types[TypeName]["properties"]]: InputReturnTypes[TypeName] extends InterfaceInputReturnType<
        Types[TypeName]
      >
        ? HackilyApplyConditionalPropertiesDefaults<
            Types,
            InputReturnTypes,
            VisitedTypeNames,
            Types[TypeName],
            InputReturnTypes[TypeName],
            PropertyName,
            Types[TypeName]["properties"][PropertyName]
          >
        : RecursivelyFindReturnType<
            Types,
            InputReturnTypes,
            Types[TypeName]["properties"][PropertyName],
            VisitedTypeNames
          >;
    }
  : never;

export type ApplyTransformerInterfaceReturnTypeDefault<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  TypeName extends keyof Types,
  VisitedTypeNames extends keyof Types
> = Types[TypeName] extends InterfaceType<keyof Types, any>
  ? {
      return: InputReturnTypes[TypeName] extends InterfaceInputReturnType<
        Types[TypeName]
      >
        ? InputReturnTypes[TypeName]["return"]
        : ApplyTransformerInterfacePropertiesReturnTypeDefault<
            Types,
            InputReturnTypes,
            TypeName,
            VisitedTypeNames
          >;
      properties: ApplyTransformerInterfacePropertiesReturnTypeDefault<
        Types,
        InputReturnTypes,
        TypeName,
        VisitedTypeNames
      >;
    }
  : never;

export type ApplyTransformerUnionReturnTypeDefault<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  TypeName extends keyof Types,
  VisitedTypeNames extends keyof Types
> = Types[TypeName] extends UnionType<keyof Types, any>
  ? InputReturnTypes[TypeName] extends UnionInputReturnType
    ? {
        return: InputReturnTypes[TypeName]["return"];
      }
    : {
        return: RecursivelyFindReturnType<
          Types,
          InputReturnTypes,
          Types[TypeName]["typeNames"],
          VisitedTypeNames
        >;
      }
  : never;

export type ApplyTransformerReturnTypeDefault<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  TypeName extends keyof Types,
  VisitedTypeNames extends keyof Types
> =
  | ApplyTransformerInterfaceReturnTypeDefault<
      Types,
      InputReturnTypes,
      TypeName,
      VisitedTypeNames
    >
  | ApplyTransformerUnionReturnTypeDefault<
      Types,
      InputReturnTypes,
      TypeName,
      VisitedTypeNames
    >;

export type ApplyTransformerReturnTypesDefaults<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>
> = {
  [TypeName in keyof Types]: ApplyTransformerReturnTypeDefault<
    Types,
    InputReturnTypes,
    TypeName,
    never
  >;
};
