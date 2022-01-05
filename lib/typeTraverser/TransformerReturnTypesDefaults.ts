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

export type ApplyUndefined<OriginalType, ReturnType> =
  undefined extends OriginalType ? ReturnType | undefined : ReturnType;

export type ApplyArrayAndUndefined<OriginalType, ReturnType> = ApplyUndefined<
  OriginalType,
  NonNullable<OriginalType> extends Array<any> ? Array<ReturnType> : ReturnType
>;

export type HackilyApplyConditionalPropertyDefaults<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  VisitedTypeNames extends keyof Types,
  Type extends InterfaceType<keyof Types>,
  PropertiesInputRetunType extends InterfacePropertiesInputReturnType<Type>,
  PropertyName extends keyof Type["type"],
  FallbackKey extends keyof Types
> = undefined extends PropertiesInputRetunType[PropertyName]
  ? ApplyArrayAndUndefined<
      Type["type"][PropertyName],
      RecursivelyFindReturnType<
        Types,
        InputReturnTypes,
        FallbackKey,
        VisitedTypeNames
      >
    >
  : ApplyUndefined<
      Type["type"][PropertyName],
      PropertiesInputRetunType[PropertyName]
    >;

export type HackilyApplyConditionalPropertiesDefaults<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  VisitedTypeNames extends keyof Types,
  Type extends InterfaceType<keyof Types>,
  InputReturnType extends InterfaceInputReturnType<any>,
  PropertyName extends keyof Type["type"],
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
  : ApplyArrayAndUndefined<
      Type["type"][PropertyName],
      RecursivelyFindReturnType<
        Types,
        InputReturnTypes,
        FallbackKey,
        VisitedTypeNames
      >
    >;

export type ApplyTransformerInterfacePropertiesReturnTypeDefault<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  TypeName extends keyof Types,
  VisitedTypeNames extends keyof Types
> = Types[TypeName] extends InterfaceType<keyof Types>
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
        : ApplyArrayAndUndefined<
            Types[TypeName]["type"][PropertyName],
            RecursivelyFindReturnType<
              Types,
              InputReturnTypes,
              Types[TypeName]["properties"][PropertyName],
              VisitedTypeNames
            >
          >;
    }
  : never;

export type ApplyTransformerInterfaceReturnTypeDefault<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  TypeName extends keyof Types,
  Type extends InterfaceType<keyof Types>,
  VisitedTypeNames extends keyof Types
> = {
  return: InputReturnTypes[TypeName] extends InterfaceInputReturnType<Type>
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
};

export type ApplyTransformerUnionReturnTypeDefault<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  TypeName extends keyof Types,
  Type extends UnionType<keyof Types>,
  VisitedTypeNames extends keyof Types
> = {
  return: InputReturnTypes[TypeName] extends UnionInputReturnType
    ? InputReturnTypes[TypeName]["return"]
    : RecursivelyFindReturnType<
        Types,
        InputReturnTypes,
        Type["typeNames"],
        VisitedTypeNames
      >;
};

export type ApplyTransformerReturnTypeDefault<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  TypeName extends keyof Types,
  VisitedTypeNames extends keyof Types
> = Types[TypeName] extends InterfaceType<keyof Types>
  ? ApplyTransformerInterfaceReturnTypeDefault<
      Types,
      InputReturnTypes,
      TypeName,
      Types[TypeName],
      VisitedTypeNames
    >
  : Types[TypeName] extends UnionType<keyof Types>
  ? ApplyTransformerUnionReturnTypeDefault<
      Types,
      InputReturnTypes,
      TypeName,
      Types[TypeName],
      VisitedTypeNames
    >
  : never;

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
