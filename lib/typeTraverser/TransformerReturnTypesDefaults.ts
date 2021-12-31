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

// This is here and not inside of the
export type HackilyApplyConditionalPropertyDefaults<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends TransformerInputReturnTypes<Types>,
  VisitedTypeNames extends keyof Types,
  Type extends InterfaceType<keyof Types>,
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
  TypeName extends keyof Types,
  VisitedTypeNames extends keyof Types,
  Type extends InterfaceType<keyof Types>,
  InputReturnType extends InterfaceInputReturnType<Types, TypeName>,
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
> = Types[TypeName] extends InterfaceType<keyof Types>
  ? {
      [PropertyName in keyof Types[TypeName]["properties"]]: InputReturnTypes[TypeName] extends InterfaceInputReturnType<
        Types,
        TypeName
      >
        ? HackilyApplyConditionalPropertiesDefaults<
            Types,
            InputReturnTypes,
            TypeName,
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
> = Types[TypeName] extends InterfaceType<keyof Types>
  ? {
      return: InputReturnTypes[TypeName] extends InterfaceInputReturnType<
        Types,
        TypeName
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
> = Types[TypeName] extends UnionType<keyof Types>
  ? {
      return: InputReturnTypes[TypeName] extends UnionInputReturnType<
        Types,
        TypeName
      >
        ? InputReturnTypes[TypeName]["return"]
        : RecursivelyFindReturnType<
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
> = Types[TypeName] extends InterfaceType<keyof Types>
  ? ApplyTransformerInterfaceReturnTypeDefault<
      Types,
      InputReturnTypes,
      TypeName,
      VisitedTypeNames
    >
  : Types[TypeName] extends UnionType<keyof Types>
  ? ApplyTransformerUnionReturnTypeDefault<
      Types,
      InputReturnTypes,
      TypeName,
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
