[shexj-traverser](../README.md) / [Exports](../modules.md) / Transformers

# Interface: Transformers<SchemaReturn, ShapeOrReturn, ShapeAndReturn, ShapeNotReturn, ShapeExternalReturn, NodeConstraintReturn, ObjectLiteralReturn, IriStemReturn, IriStemRangeReturn, LiteralStemReturn, LiteralStemRangeReturn, LanguageReturn, LanguageStemReturn, LanguageStemRangeReturn, WildcardReturn, ShapeReturn, EachOfReturn, OneOfReturn, TripleConstraintReturn, SemActReturn, AnnotationReturn, shapeExprReturn, valueSetValueReturn, tripleExprReturn, Schema_startActsReturn, Schema_startReturn, Schema_shapesReturn, ShapeOr_shapeExprsReturn, ShapeAnd_shapeExprsReturn, ShapeNot_shapeExprReturn, NodeConstraint_valuesReturn, IriStemRange_exclusionsReturn, LiteralStemRange_exclusionsReturn, LanguageStemRange_exclusionsReturn, Shape_expressionReturn, Shape_semActsReturn, Shape_AnnotationsReturn, EachOf_expressionsReturn, EachOf_semActsReturn, EachOf_AnnotationsReturn, OneOf_expressionsReturn, OneOf_semActsReturn, OneOf_AnnotationsReturn, TripleConstraint_valueExprReturn, TripleConstraint_semActsReturn, TripleConstraint_AnnotationsReturn\>

## Type parameters

| Name | Default |
| :------ | :------ |
| `SchemaReturn` | Schema |
| `ShapeOrReturn` | ShapeOr |
| `ShapeAndReturn` | ShapeAnd |
| `ShapeNotReturn` | ShapeNot |
| `ShapeExternalReturn` | ShapeExternal |
| `NodeConstraintReturn` | NodeConstraint |
| `ObjectLiteralReturn` | ObjectLiteral |
| `IriStemReturn` | IriStem |
| `IriStemRangeReturn` | IriStemRange |
| `LiteralStemReturn` | LiteralStem |
| `LiteralStemRangeReturn` | LiteralStemRange |
| `LanguageReturn` | Language |
| `LanguageStemReturn` | LanguageStem |
| `LanguageStemRangeReturn` | LanguageStemRange |
| `WildcardReturn` | Wildcard |
| `ShapeReturn` | Shape |
| `EachOfReturn` | EachOf |
| `OneOfReturn` | OneOf |
| `TripleConstraintReturn` | TripleConstraint |
| `SemActReturn` | SemAct |
| `AnnotationReturn` | Annotation |
| `shapeExprReturn` | ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| NodeConstraintReturn \| ShapeReturn \| ShapeExternalReturn \| shapeExprRef |
| `valueSetValueReturn` | IRIREF \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn |
| `tripleExprReturn` | EachOfReturn \| OneOfReturn \| TripleConstraintReturn \| tripleExprRef |
| `Schema_startActsReturn` | SemActReturn[] |
| `Schema_startReturn` | shapeExprReturn |
| `Schema_shapesReturn` | shapeExprReturn[] |
| `ShapeOr_shapeExprsReturn` | shapeExprReturn[] |
| `ShapeAnd_shapeExprsReturn` | shapeExprReturn[] |
| `ShapeNot_shapeExprReturn` | shapeExprReturn |
| `NodeConstraint_valuesReturn` | valueSetValueReturn[] |
| `IriStemRange_exclusionsReturn` | (IRIREF \| IriStemReturn)[] |
| `LiteralStemRange_exclusionsReturn` | (STRING \| LiteralStemReturn)[] |
| `LanguageStemRange_exclusionsReturn` | (LANGTAG \| LanguageStemReturn)[] |
| `Shape_expressionReturn` | tripleExprReturn |
| `Shape_semActsReturn` | SemActReturn[] |
| `Shape_AnnotationsReturn` | AnnotationReturn[] |
| `EachOf_expressionsReturn` | tripleExprReturn[] |
| `EachOf_semActsReturn` | SemActReturn[] |
| `EachOf_AnnotationsReturn` | AnnotationReturn[] |
| `OneOf_expressionsReturn` | tripleExprReturn[] |
| `OneOf_semActsReturn` | SemActReturn[] |
| `OneOf_AnnotationsReturn` | AnnotationReturn[] |
| `TripleConstraint_valueExprReturn` | shapeExprReturn |
| `TripleConstraint_semActsReturn` | SemActReturn[] |
| `TripleConstraint_AnnotationsReturn` | AnnotationReturn[] |

## Table of contents

### Properties

- [Annotation](transformers.md#annotation)
- [EachOf](transformers.md#eachof)
- [EachOf\_Annotations](transformers.md#eachof_annotations)
- [EachOf\_expressions](transformers.md#eachof_expressions)
- [EachOf\_semActs](transformers.md#eachof_semacts)
- [IriStem](transformers.md#iristem)
- [IriStemRange](transformers.md#iristemrange)
- [IriStemRange\_exclusions](transformers.md#iristemrange_exclusions)
- [Language](transformers.md#language)
- [LanguageStem](transformers.md#languagestem)
- [LanguageStemRange](transformers.md#languagestemrange)
- [LanguageStemRange\_exclusions](transformers.md#languagestemrange_exclusions)
- [LiteralStem](transformers.md#literalstem)
- [LiteralStemRange](transformers.md#literalstemrange)
- [LiteralStemRange\_exclusions](transformers.md#literalstemrange_exclusions)
- [NodeConstraint](transformers.md#nodeconstraint)
- [NodeConstraint\_values](transformers.md#nodeconstraint_values)
- [ObjectLiteral](transformers.md#objectliteral)
- [OneOf](transformers.md#oneof)
- [OneOf\_Annotations](transformers.md#oneof_annotations)
- [OneOf\_expressions](transformers.md#oneof_expressions)
- [OneOf\_semActs](transformers.md#oneof_semacts)
- [Schema](transformers.md#schema)
- [Schema\_shapes](transformers.md#schema_shapes)
- [Schema\_start](transformers.md#schema_start)
- [Schema\_startActs](transformers.md#schema_startacts)
- [SemAct](transformers.md#semact)
- [Shape](transformers.md#shape)
- [ShapeAnd](transformers.md#shapeand)
- [ShapeAnd\_shapeExprs](transformers.md#shapeand_shapeexprs)
- [ShapeExternal](transformers.md#shapeexternal)
- [ShapeNot](transformers.md#shapenot)
- [ShapeNot\_shapeExpr](transformers.md#shapenot_shapeexpr)
- [ShapeOr](transformers.md#shapeor)
- [ShapeOr\_shapeExprs](transformers.md#shapeor_shapeexprs)
- [Shape\_Annotations](transformers.md#shape_annotations)
- [Shape\_expression](transformers.md#shape_expression)
- [Shape\_semActs](transformers.md#shape_semacts)
- [TripleConstraint](transformers.md#tripleconstraint)
- [TripleConstraint\_Annotations](transformers.md#tripleconstraint_annotations)
- [TripleConstraint\_semActs](transformers.md#tripleconstraint_semacts)
- [TripleConstraint\_valueExpr](transformers.md#tripleconstraint_valueexpr)
- [Wildcard](transformers.md#wildcard)
- [shapeExpr](transformers.md#shapeexpr)
- [tripleExpr](transformers.md#tripleexpr)
- [valueSetValue](transformers.md#valuesetvalue)

## Properties

### Annotation

• **Annotation**: (`wildcard`: Annotation, `parentStack`: ParentTrace[]) => *Promise*<AnnotationReturn\>

#### Type declaration

▸ (`wildcard`: Annotation, `parentStack`: ParentTrace[]): *Promise*<AnnotationReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wildcard` | Annotation |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<AnnotationReturn\>

Defined in: [Transformers.ts:223](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L223)

___

### EachOf

• **EachOf**: (`eachOf`: EachOf, `transformedChildren`: { `annotations?`: EachOf\_AnnotationsReturn ; `expressions`: EachOf\_expressionsReturn ; `semActs?`: EachOf\_semActsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<EachOfReturn\>

#### Type declaration

▸ (`eachOf`: EachOf, `transformedChildren`: { `annotations?`: EachOf\_AnnotationsReturn ; `expressions`: EachOf\_expressionsReturn ; `semActs?`: EachOf\_semActsReturn  }, `parentStack`: ParentTrace[]): *Promise*<EachOfReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eachOf` | EachOf |
| `transformedChildren` | *object* |
| `transformedChildren.annotations?` | EachOf\_AnnotationsReturn |
| `transformedChildren.expressions` | EachOf\_expressionsReturn |
| `transformedChildren.semActs?` | EachOf\_semActsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<EachOfReturn\>

Defined in: [Transformers.ts:192](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L192)

___

### EachOf\_Annotations

• **EachOf\_Annotations**: (`annotations`: Annotation[], `transformed`: AnnotationReturn[], `parentStack`: ParentTrace[]) => *Promise*<EachOf\_AnnotationsReturn\>

#### Type declaration

▸ (`annotations`: Annotation[], `transformed`: AnnotationReturn[], `parentStack`: ParentTrace[]): *Promise*<EachOf\_AnnotationsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotations` | Annotation[] |
| `transformed` | AnnotationReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<EachOf\_AnnotationsReturn\>

Defined in: [Transformers.ts:339](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L339)

___

### EachOf\_expressions

• **EachOf\_expressions**: (`expressions`: tripleExpr[], `transformed`: tripleExprReturn[], `parentStack`: ParentTrace[]) => *Promise*<EachOf\_expressionsReturn\>

#### Type declaration

▸ (`expressions`: tripleExpr[], `transformed`: tripleExprReturn[], `parentStack`: ParentTrace[]): *Promise*<EachOf\_expressionsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expressions` | tripleExpr[] |
| `transformed` | tripleExprReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<EachOf\_expressionsReturn\>

Defined in: [Transformers.ts:329](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L329)

___

### EachOf\_semActs

• **EachOf\_semActs**: (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]) => *Promise*<EachOf\_semActsReturn\>

#### Type declaration

▸ (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]): *Promise*<EachOf\_semActsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semActs` | SemAct[] |
| `transformed` | SemActReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<EachOf\_semActsReturn\>

Defined in: [Transformers.ts:334](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L334)

___

### IriStem

• **IriStem**: (`iriStem`: IriStem, `parentStack`: ParentTrace[]) => *Promise*<IriStemReturn\>

#### Type declaration

▸ (`iriStem`: IriStem, `parentStack`: ParentTrace[]): *Promise*<IriStemReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iriStem` | IriStem |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<IriStemReturn\>

Defined in: [Transformers.ts:148](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L148)

___

### IriStemRange

• **IriStemRange**: (`iriStemRange`: IriStemRange, `transformedChildren`: { `exclusions`: IriStemRange\_exclusionsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<IriStemRangeReturn\>

#### Type declaration

▸ (`iriStemRange`: IriStemRange, `transformedChildren`: { `exclusions`: IriStemRange\_exclusionsReturn  }, `parentStack`: ParentTrace[]): *Promise*<IriStemRangeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iriStemRange` | IriStemRange |
| `transformedChildren` | *object* |
| `transformedChildren.exclusions` | IriStemRange\_exclusionsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<IriStemRangeReturn\>

Defined in: [Transformers.ts:152](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L152)

___

### IriStemRange\_exclusions

• **IriStemRange\_exclusions**: (`exclusions`: (*string* \| IriStem)[], `transformed`: (*string* \| IriStemReturn)[], `parentStack`: ParentTrace[]) => *Promise*<IriStemRange\_exclusionsReturn\>

#### Type declaration

▸ (`exclusions`: (*string* \| IriStem)[], `transformed`: (*string* \| IriStemReturn)[], `parentStack`: ParentTrace[]): *Promise*<IriStemRange\_exclusionsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exclusions` | (*string* \| IriStem)[] |
| `transformed` | (*string* \| IriStemReturn)[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<IriStemRange\_exclusionsReturn\>

Defined in: [Transformers.ts:299](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L299)

___

### Language

• **Language**: (`language`: Language, `parentStack`: ParentTrace[]) => *Promise*<LanguageReturn\>

#### Type declaration

▸ (`language`: Language, `parentStack`: ParentTrace[]): *Promise*<LanguageReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | Language |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LanguageReturn\>

Defined in: [Transformers.ts:166](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L166)

___

### LanguageStem

• **LanguageStem**: (`languageStem`: LanguageStem, `parentStack`: ParentTrace[]) => *Promise*<LanguageStemReturn\>

#### Type declaration

▸ (`languageStem`: LanguageStem, `parentStack`: ParentTrace[]): *Promise*<LanguageStemReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageStem` | LanguageStem |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LanguageStemReturn\>

Defined in: [Transformers.ts:170](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L170)

___

### LanguageStemRange

• **LanguageStemRange**: (`languageStemRange`: LanguageStemRange, `transformedChildren`: { `exclusions`: LanguageStemRange\_exclusionsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<LanguageStemRangeReturn\>

#### Type declaration

▸ (`languageStemRange`: LanguageStemRange, `transformedChildren`: { `exclusions`: LanguageStemRange\_exclusionsReturn  }, `parentStack`: ParentTrace[]): *Promise*<LanguageStemRangeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageStemRange` | LanguageStemRange |
| `transformedChildren` | *object* |
| `transformedChildren.exclusions` | LanguageStemRange\_exclusionsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LanguageStemRangeReturn\>

Defined in: [Transformers.ts:174](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L174)

___

### LanguageStemRange\_exclusions

• **LanguageStemRange\_exclusions**: (`exclusions`: (*string* \| LanguageStem)[], `transformed`: (*string* \| LanguageStemReturn)[], `parentStack`: ParentTrace[]) => *Promise*<LanguageStemRange\_exclusionsReturn\>

#### Type declaration

▸ (`exclusions`: (*string* \| LanguageStem)[], `transformed`: (*string* \| LanguageStemReturn)[], `parentStack`: ParentTrace[]): *Promise*<LanguageStemRange\_exclusionsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exclusions` | (*string* \| LanguageStem)[] |
| `transformed` | (*string* \| LanguageStemReturn)[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LanguageStemRange\_exclusionsReturn\>

Defined in: [Transformers.ts:309](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L309)

___

### LiteralStem

• **LiteralStem**: (`literalStem`: LiteralStem, `parentStack`: ParentTrace[]) => *Promise*<LiteralStemReturn\>

#### Type declaration

▸ (`literalStem`: LiteralStem, `parentStack`: ParentTrace[]): *Promise*<LiteralStemReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `literalStem` | LiteralStem |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LiteralStemReturn\>

Defined in: [Transformers.ts:157](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L157)

___

### LiteralStemRange

• **LiteralStemRange**: (`literalStemRange`: LiteralStemRange, `transformedChildren`: { `exclusions`: LiteralStemRange\_exclusionsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<LiteralStemRangeReturn\>

#### Type declaration

▸ (`literalStemRange`: LiteralStemRange, `transformedChildren`: { `exclusions`: LiteralStemRange\_exclusionsReturn  }, `parentStack`: ParentTrace[]): *Promise*<LiteralStemRangeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `literalStemRange` | LiteralStemRange |
| `transformedChildren` | *object* |
| `transformedChildren.exclusions` | LiteralStemRange\_exclusionsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LiteralStemRangeReturn\>

Defined in: [Transformers.ts:161](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L161)

___

### LiteralStemRange\_exclusions

• **LiteralStemRange\_exclusions**: (`exclusions`: (*string* \| LiteralStem)[], `transformed`: (*string* \| LiteralStemReturn)[], `parentStack`: ParentTrace[]) => *Promise*<LiteralStemRange\_exclusionsReturn\>

#### Type declaration

▸ (`exclusions`: (*string* \| LiteralStem)[], `transformed`: (*string* \| LiteralStemReturn)[], `parentStack`: ParentTrace[]): *Promise*<LiteralStemRange\_exclusionsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exclusions` | (*string* \| LiteralStem)[] |
| `transformed` | (*string* \| LiteralStemReturn)[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LiteralStemRange\_exclusionsReturn\>

Defined in: [Transformers.ts:304](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L304)

___

### NodeConstraint

• **NodeConstraint**: (`nodeConstraint`: NodeConstraint, `transformedChildren`: { `values?`: NodeConstraint\_valuesReturn  }, `parentStack`: ParentTrace[]) => *Promise*<NodeConstraintReturn\>

#### Type declaration

▸ (`nodeConstraint`: NodeConstraint, `transformedChildren`: { `values?`: NodeConstraint\_valuesReturn  }, `parentStack`: ParentTrace[]): *Promise*<NodeConstraintReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeConstraint` | NodeConstraint |
| `transformedChildren` | *object* |
| `transformedChildren.values?` | NodeConstraint\_valuesReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<NodeConstraintReturn\>

Defined in: [Transformers.ts:139](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L139)

___

### NodeConstraint\_values

• **NodeConstraint\_values**: (`values`: valueSetValue[], `transformed`: valueSetValueReturn[], `parentStack`: ParentTrace[]) => *Promise*<NodeConstraint\_valuesReturn\>

#### Type declaration

▸ (`values`: valueSetValue[], `transformed`: valueSetValueReturn[], `parentStack`: ParentTrace[]): *Promise*<NodeConstraint\_valuesReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | valueSetValue[] |
| `transformed` | valueSetValueReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<NodeConstraint\_valuesReturn\>

Defined in: [Transformers.ts:294](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L294)

___

### ObjectLiteral

• **ObjectLiteral**: (`objectLiteral`: ObjectLiteral, `parentStack`: ParentTrace[]) => *Promise*<ObjectLiteralReturn\>

#### Type declaration

▸ (`objectLiteral`: ObjectLiteral, `parentStack`: ParentTrace[]): *Promise*<ObjectLiteralReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectLiteral` | ObjectLiteral |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ObjectLiteralReturn\>

Defined in: [Transformers.ts:144](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L144)

___

### OneOf

• **OneOf**: (`eachOf`: OneOf, `transformedChildren`: { `annotations?`: OneOf\_AnnotationsReturn ; `expressions`: OneOf\_expressionsReturn ; `semActs?`: OneOf\_semActsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<OneOfReturn\>

#### Type declaration

▸ (`eachOf`: OneOf, `transformedChildren`: { `annotations?`: OneOf\_AnnotationsReturn ; `expressions`: OneOf\_expressionsReturn ; `semActs?`: OneOf\_semActsReturn  }, `parentStack`: ParentTrace[]): *Promise*<OneOfReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eachOf` | OneOf |
| `transformedChildren` | *object* |
| `transformedChildren.annotations?` | OneOf\_AnnotationsReturn |
| `transformedChildren.expressions` | OneOf\_expressionsReturn |
| `transformedChildren.semActs?` | OneOf\_semActsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<OneOfReturn\>

Defined in: [Transformers.ts:201](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L201)

___

### OneOf\_Annotations

• **OneOf\_Annotations**: (`annotations`: Annotation[], `transformed`: AnnotationReturn[], `parentStack`: ParentTrace[]) => *Promise*<OneOf\_AnnotationsReturn\>

#### Type declaration

▸ (`annotations`: Annotation[], `transformed`: AnnotationReturn[], `parentStack`: ParentTrace[]): *Promise*<OneOf\_AnnotationsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotations` | Annotation[] |
| `transformed` | AnnotationReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<OneOf\_AnnotationsReturn\>

Defined in: [Transformers.ts:354](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L354)

___

### OneOf\_expressions

• **OneOf\_expressions**: (`expressions`: tripleExpr[], `transformed`: tripleExprReturn[], `parentStack`: ParentTrace[]) => *Promise*<OneOf\_expressionsReturn\>

#### Type declaration

▸ (`expressions`: tripleExpr[], `transformed`: tripleExprReturn[], `parentStack`: ParentTrace[]): *Promise*<OneOf\_expressionsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expressions` | tripleExpr[] |
| `transformed` | tripleExprReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<OneOf\_expressionsReturn\>

Defined in: [Transformers.ts:344](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L344)

___

### OneOf\_semActs

• **OneOf\_semActs**: (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]) => *Promise*<OneOf\_semActsReturn\>

#### Type declaration

▸ (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]): *Promise*<OneOf\_semActsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semActs` | SemAct[] |
| `transformed` | SemActReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<OneOf\_semActsReturn\>

Defined in: [Transformers.ts:349](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L349)

___

### Schema

• **Schema**: (`schema`: Schema, `transformedChildren`: { `shapes?`: Schema\_shapesReturn ; `start?`: Schema\_startReturn ; `startActs?`: Schema\_startActsReturn  }) => *Promise*<SchemaReturn\>

#### Type declaration

▸ (`schema`: Schema, `transformedChildren`: { `shapes?`: Schema\_shapesReturn ; `start?`: Schema\_startReturn ; `startActs?`: Schema\_startActsReturn  }): *Promise*<SchemaReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | Schema |
| `transformedChildren` | *object* |
| `transformedChildren.shapes?` | Schema\_shapesReturn |
| `transformedChildren.start?` | Schema\_startReturn |
| `transformedChildren.startActs?` | Schema\_startActsReturn |

**Returns:** *Promise*<SchemaReturn\>

Defined in: [Transformers.ts:112](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L112)

___

### Schema\_shapes

• **Schema\_shapes**: (`shapes`: shapeExpr[], `transformed`: shapeExprReturn[], `parentStack`: ParentTrace[]) => *Promise*<Schema\_shapesReturn\>

#### Type declaration

▸ (`shapes`: shapeExpr[], `transformed`: shapeExprReturn[], `parentStack`: ParentTrace[]): *Promise*<Schema\_shapesReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | shapeExpr[] |
| `transformed` | shapeExprReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<Schema\_shapesReturn\>

Defined in: [Transformers.ts:274](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L274)

___

### Schema\_start

• **Schema\_start**: (`shapeExpr`: shapeExpr, `transformed`: shapeExprReturn, `parentStack`: ParentTrace[]) => *Promise*<Schema\_startReturn\>

#### Type declaration

▸ (`shapeExpr`: shapeExpr, `transformed`: shapeExprReturn, `parentStack`: ParentTrace[]): *Promise*<Schema\_startReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeExpr` | shapeExpr |
| `transformed` | shapeExprReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<Schema\_startReturn\>

Defined in: [Transformers.ts:269](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L269)

___

### Schema\_startActs

• **Schema\_startActs**: (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]) => *Promise*<Schema\_startActsReturn\>

#### Type declaration

▸ (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]): *Promise*<Schema\_startActsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semActs` | SemAct[] |
| `transformed` | SemActReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<Schema\_startActsReturn\>

Defined in: [Transformers.ts:264](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L264)

___

### SemAct

• **SemAct**: (`wildcard`: SemAct, `parentStack`: ParentTrace[]) => *Promise*<SemActReturn\>

#### Type declaration

▸ (`wildcard`: SemAct, `parentStack`: ParentTrace[]): *Promise*<SemActReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wildcard` | SemAct |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<SemActReturn\>

Defined in: [Transformers.ts:219](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L219)

___

### Shape

• **Shape**: (`shape`: Shape, `transformedChildren`: { `annotations?`: Shape\_AnnotationsReturn ; `expression?`: Shape\_expressionReturn ; `semActs?`: Shape\_semActsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<ShapeReturn\>

#### Type declaration

▸ (`shape`: Shape, `transformedChildren`: { `annotations?`: Shape\_AnnotationsReturn ; `expression?`: Shape\_expressionReturn ; `semActs?`: Shape\_semActsReturn  }, `parentStack`: ParentTrace[]): *Promise*<ShapeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | Shape |
| `transformedChildren` | *object* |
| `transformedChildren.annotations?` | Shape\_AnnotationsReturn |
| `transformedChildren.expression?` | Shape\_expressionReturn |
| `transformedChildren.semActs?` | Shape\_semActsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeReturn\>

Defined in: [Transformers.ts:183](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L183)

___

### ShapeAnd

• **ShapeAnd**: (`shapeOr`: ShapeAnd, `transformedChildren`: { `shapeExprs`: ShapeAnd\_shapeExprsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<ShapeAndReturn\>

#### Type declaration

▸ (`shapeOr`: ShapeAnd, `transformedChildren`: { `shapeExprs`: ShapeAnd\_shapeExprsReturn  }, `parentStack`: ParentTrace[]): *Promise*<ShapeAndReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeOr` | ShapeAnd |
| `transformedChildren` | *object* |
| `transformedChildren.shapeExprs` | ShapeAnd\_shapeExprsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeAndReturn\>

Defined in: [Transformers.ts:125](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L125)

___

### ShapeAnd\_shapeExprs

• **ShapeAnd\_shapeExprs**: (`shapeExprs`: shapeExpr[], `transformed`: shapeExprReturn[], `parentStack`: ParentTrace[]) => *Promise*<ShapeAnd\_shapeExprsReturn\>

#### Type declaration

▸ (`shapeExprs`: shapeExpr[], `transformed`: shapeExprReturn[], `parentStack`: ParentTrace[]): *Promise*<ShapeAnd\_shapeExprsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeExprs` | shapeExpr[] |
| `transformed` | shapeExprReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeAnd\_shapeExprsReturn\>

Defined in: [Transformers.ts:284](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L284)

___

### ShapeExternal

• **ShapeExternal**: (`shapeExternal`: ShapeExternal, `parentStack`: ParentTrace[]) => *Promise*<ShapeExternalReturn\>

#### Type declaration

▸ (`shapeExternal`: ShapeExternal, `parentStack`: ParentTrace[]): *Promise*<ShapeExternalReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeExternal` | ShapeExternal |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeExternalReturn\>

Defined in: [Transformers.ts:135](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L135)

___

### ShapeNot

• **ShapeNot**: (`shapeOr`: ShapeNot, `transformedChildren`: { `shapeExpr`: ShapeNot\_shapeExprReturn  }, `parentStack`: ParentTrace[]) => *Promise*<ShapeNotReturn\>

#### Type declaration

▸ (`shapeOr`: ShapeNot, `transformedChildren`: { `shapeExpr`: ShapeNot\_shapeExprReturn  }, `parentStack`: ParentTrace[]): *Promise*<ShapeNotReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeOr` | ShapeNot |
| `transformedChildren` | *object* |
| `transformedChildren.shapeExpr` | ShapeNot\_shapeExprReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeNotReturn\>

Defined in: [Transformers.ts:130](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L130)

___

### ShapeNot\_shapeExpr

• **ShapeNot\_shapeExpr**: (`shapeExpr`: shapeExpr, `transformed`: shapeExprReturn, `parentStack`: ParentTrace[]) => *Promise*<ShapeNot\_shapeExprReturn\>

#### Type declaration

▸ (`shapeExpr`: shapeExpr, `transformed`: shapeExprReturn, `parentStack`: ParentTrace[]): *Promise*<ShapeNot\_shapeExprReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeExpr` | shapeExpr |
| `transformed` | shapeExprReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeNot\_shapeExprReturn\>

Defined in: [Transformers.ts:289](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L289)

___

### ShapeOr

• **ShapeOr**: (`shapeOr`: ShapeOr, `transformedChildren`: { `shapeExprs`: ShapeOr\_shapeExprsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<ShapeOrReturn\>

#### Type declaration

▸ (`shapeOr`: ShapeOr, `transformedChildren`: { `shapeExprs`: ShapeOr\_shapeExprsReturn  }, `parentStack`: ParentTrace[]): *Promise*<ShapeOrReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeOr` | ShapeOr |
| `transformedChildren` | *object* |
| `transformedChildren.shapeExprs` | ShapeOr\_shapeExprsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeOrReturn\>

Defined in: [Transformers.ts:120](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L120)

___

### ShapeOr\_shapeExprs

• **ShapeOr\_shapeExprs**: (`shapeExprs`: shapeExpr[], `transformed`: shapeExprReturn[], `parentStack`: ParentTrace[]) => *Promise*<ShapeOr\_shapeExprsReturn\>

#### Type declaration

▸ (`shapeExprs`: shapeExpr[], `transformed`: shapeExprReturn[], `parentStack`: ParentTrace[]): *Promise*<ShapeOr\_shapeExprsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeExprs` | shapeExpr[] |
| `transformed` | shapeExprReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeOr\_shapeExprsReturn\>

Defined in: [Transformers.ts:279](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L279)

___

### Shape\_Annotations

• **Shape\_Annotations**: (`annotations`: Annotation[], `transformed`: AnnotationReturn[], `parentStack`: ParentTrace[]) => *Promise*<Shape\_AnnotationsReturn\>

#### Type declaration

▸ (`annotations`: Annotation[], `transformed`: AnnotationReturn[], `parentStack`: ParentTrace[]): *Promise*<Shape\_AnnotationsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotations` | Annotation[] |
| `transformed` | AnnotationReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<Shape\_AnnotationsReturn\>

Defined in: [Transformers.ts:324](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L324)

___

### Shape\_expression

• **Shape\_expression**: (`expression`: tripleExpr, `transformed`: tripleExprReturn, `parentStack`: ParentTrace[]) => *Promise*<Shape\_expressionReturn\>

#### Type declaration

▸ (`expression`: tripleExpr, `transformed`: tripleExprReturn, `parentStack`: ParentTrace[]): *Promise*<Shape\_expressionReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | tripleExpr |
| `transformed` | tripleExprReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<Shape\_expressionReturn\>

Defined in: [Transformers.ts:314](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L314)

___

### Shape\_semActs

• **Shape\_semActs**: (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]) => *Promise*<Shape\_semActsReturn\>

#### Type declaration

▸ (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]): *Promise*<Shape\_semActsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semActs` | SemAct[] |
| `transformed` | SemActReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<Shape\_semActsReturn\>

Defined in: [Transformers.ts:319](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L319)

___

### TripleConstraint

• **TripleConstraint**: (`tripleConstraint`: TripleConstraint, `transformedChildren`: { `annotations?`: TripleConstraint\_AnnotationsReturn ; `semActs?`: TripleConstraint\_semActsReturn ; `valueExpr?`: TripleConstraint\_valueExprReturn  }, `parentStack`: ParentTrace[]) => *Promise*<TripleConstraintReturn\>

#### Type declaration

▸ (`tripleConstraint`: TripleConstraint, `transformedChildren`: { `annotations?`: TripleConstraint\_AnnotationsReturn ; `semActs?`: TripleConstraint\_semActsReturn ; `valueExpr?`: TripleConstraint\_valueExprReturn  }, `parentStack`: ParentTrace[]): *Promise*<TripleConstraintReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tripleConstraint` | TripleConstraint |
| `transformedChildren` | *object* |
| `transformedChildren.annotations?` | TripleConstraint\_AnnotationsReturn |
| `transformedChildren.semActs?` | TripleConstraint\_semActsReturn |
| `transformedChildren.valueExpr?` | TripleConstraint\_valueExprReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<TripleConstraintReturn\>

Defined in: [Transformers.ts:210](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L210)

___

### TripleConstraint\_Annotations

• **TripleConstraint\_Annotations**: (`annotations`: Annotation[], `transformed`: AnnotationReturn[], `parentStack`: ParentTrace[]) => *Promise*<TripleConstraint\_AnnotationsReturn\>

#### Type declaration

▸ (`annotations`: Annotation[], `transformed`: AnnotationReturn[], `parentStack`: ParentTrace[]): *Promise*<TripleConstraint\_AnnotationsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotations` | Annotation[] |
| `transformed` | AnnotationReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<TripleConstraint\_AnnotationsReturn\>

Defined in: [Transformers.ts:369](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L369)

___

### TripleConstraint\_semActs

• **TripleConstraint\_semActs**: (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]) => *Promise*<TripleConstraint\_semActsReturn\>

#### Type declaration

▸ (`semActs`: SemAct[], `transformed`: SemActReturn[], `parentStack`: ParentTrace[]): *Promise*<TripleConstraint\_semActsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semActs` | SemAct[] |
| `transformed` | SemActReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<TripleConstraint\_semActsReturn\>

Defined in: [Transformers.ts:364](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L364)

___

### TripleConstraint\_valueExpr

• **TripleConstraint\_valueExpr**: (`valueExpr`: shapeExpr, `transformed`: shapeExprReturn, `parentStack`: ParentTrace[]) => *Promise*<TripleConstraint\_valueExprReturn\>

#### Type declaration

▸ (`valueExpr`: shapeExpr, `transformed`: shapeExprReturn, `parentStack`: ParentTrace[]): *Promise*<TripleConstraint\_valueExprReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueExpr` | shapeExpr |
| `transformed` | shapeExprReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<TripleConstraint\_valueExprReturn\>

Defined in: [Transformers.ts:359](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L359)

___

### Wildcard

• **Wildcard**: (`wildcard`: Wildcard, `parentStack`: ParentTrace[]) => *Promise*<WildcardReturn\>

#### Type declaration

▸ (`wildcard`: Wildcard, `parentStack`: ParentTrace[]): *Promise*<WildcardReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wildcard` | Wildcard |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<WildcardReturn\>

Defined in: [Transformers.ts:179](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L179)

___

### shapeExpr

• **shapeExpr**: (`shapeExpr`: shapeExpr, `transformmedSelf`: *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeExternalReturn \| NodeConstraintReturn \| ShapeReturn, `parentStack`: ParentTrace[]) => *Promise*<shapeExprReturn\>

#### Type declaration

▸ (`shapeExpr`: shapeExpr, `transformmedSelf`: *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeExternalReturn \| NodeConstraintReturn \| ShapeReturn, `parentStack`: ParentTrace[]): *Promise*<shapeExprReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeExpr` | shapeExpr |
| `transformmedSelf` | *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeExternalReturn \| NodeConstraintReturn \| ShapeReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<shapeExprReturn\>

Defined in: [Transformers.ts:228](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L228)

___

### tripleExpr

• **tripleExpr**: (`tripleExpr`: tripleExpr, `transformmedSelf`: *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn, `parentStack`: ParentTrace[]) => *Promise*<tripleExprReturn\>

#### Type declaration

▸ (`tripleExpr`: tripleExpr, `transformmedSelf`: *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn, `parentStack`: ParentTrace[]): *Promise*<tripleExprReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tripleExpr` | tripleExpr |
| `transformmedSelf` | *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<tripleExprReturn\>

Defined in: [Transformers.ts:254](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L254)

___

### valueSetValue

• **valueSetValue**: (`valueSetValue`: valueSetValue, `transformmedSelf`: *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn, `parentStack`: ParentTrace[]) => *Promise*<valueSetValueReturn\>

#### Type declaration

▸ (`valueSetValue`: valueSetValue, `transformmedSelf`: *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn, `parentStack`: ParentTrace[]): *Promise*<valueSetValueReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSetValue` | valueSetValue |
| `transformmedSelf` | *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<valueSetValueReturn\>

Defined in: [Transformers.ts:240](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/Transformers.ts#L240)
