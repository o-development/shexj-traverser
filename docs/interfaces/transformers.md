[shexj-traverser](../README.md) / [Exports](../modules.md) / Transformers

# Interface: Transformers<SchemaReturn, prefixesReturn, SemActReturn, shapeExprReturn, shapesReturn, ShapeOrReturn, ShapeAndReturn, ShapeNotReturn, ShapeRefReturn, NodeConstraintReturn, ShapeReturn, valueSetValueReturn, tripleExprReturn, AnnotationReturn, EachOfReturn, OneOfReturn, TripleConstraintReturn, ObjectLiteralReturn, IriStemReturn, IriStemRangeReturn, LiteralStemReturn, LiteralStemRangeReturn, LanguageReturn, LanguageStemReturn, LanguageStemRangeReturn, AnnotationsReturn, SemActsReturn\>

## Type parameters

| Name | Default |
| :------ | :------ |
| `SchemaReturn` | [*Schema*](schema.md) |
| `prefixesReturn` | [*prefixes*](../modules.md#prefixes) |
| `SemActReturn` | [*SemAct*](semact.md) |
| `shapeExprReturn` | [*shapeExpr*](../modules.md#shapeexpr) |
| `shapesReturn` | [*shapes*](../modules.md#shapes) |
| `ShapeOrReturn` | [*ShapeOr*](shapeor.md) |
| `ShapeAndReturn` | [*ShapeAnd*](shapeand.md) |
| `ShapeNotReturn` | [*ShapeNot*](shapenot.md) |
| `ShapeRefReturn` | [*ShapeRef*](shaperef.md) |
| `NodeConstraintReturn` | [*NodeConstraint*](nodeconstraint.md) |
| `ShapeReturn` | [*Shape*](shape.md) |
| `valueSetValueReturn` | [*valueSetValue*](../modules.md#valuesetvalue) |
| `tripleExprReturn` | [*tripleExpr*](../modules.md#tripleexpr) |
| `AnnotationReturn` | [*Annotation*](annotation.md) |
| `EachOfReturn` | [*EachOf*](eachof.md) |
| `OneOfReturn` | [*OneOf*](oneof.md) |
| `TripleConstraintReturn` | [*TripleConstraint*](tripleconstraint.md) |
| `ObjectLiteralReturn` | [*ObjectLiteral*](objectliteral.md) |
| `IriStemReturn` | [*IriStem*](iristem.md) |
| `IriStemRangeReturn` | [*IriStemRange*](iristemrange.md) |
| `LiteralStemReturn` | [*LiteralStem*](literalstem.md) |
| `LiteralStemRangeReturn` | [*LiteralStemRange*](literalstemrange.md) |
| `LanguageReturn` | [*Language*](language.md) |
| `LanguageStemReturn` | [*LanguageStem*](languagestem.md) |
| `LanguageStemRangeReturn` | [*LanguageStemRange*](languagestemrange.md) |
| `AnnotationsReturn` | AnnotationReturn[] |
| `SemActsReturn` | SemActReturn[] |

## Table of contents

### Properties

- [Annotation](transformers.md#annotation)
- [Annotations](transformers.md#annotations)
- [EachOf](transformers.md#eachof)
- [IriStem](transformers.md#iristem)
- [IriStemRange](transformers.md#iristemrange)
- [Language](transformers.md#language)
- [LanguageStem](transformers.md#languagestem)
- [LanguageStemRange](transformers.md#languagestemrange)
- [LiteralStem](transformers.md#literalstem)
- [LiteralStemRange](transformers.md#literalstemrange)
- [NodeConstraint](transformers.md#nodeconstraint)
- [ObjectLiteral](transformers.md#objectliteral)
- [OneOf](transformers.md#oneof)
- [Schema](transformers.md#schema)
- [SemAct](transformers.md#semact)
- [SemActs](transformers.md#semacts)
- [Shape](transformers.md#shape)
- [ShapeAnd](transformers.md#shapeand)
- [ShapeNot](transformers.md#shapenot)
- [ShapeOr](transformers.md#shapeor)
- [ShapeRef](transformers.md#shaperef)
- [TripleConstraint](transformers.md#tripleconstraint)
- [prefixes](transformers.md#prefixes)
- [shapeExpr](transformers.md#shapeexpr)
- [shapes](transformers.md#shapes)
- [tripleExpr](transformers.md#tripleexpr)
- [valueSetValue](transformers.md#valuesetvalue)

## Properties

### Annotation

• **Annotation**: (`annotation`: [*Annotation*](annotation.md)<[*objectValue*](../modules.md#objectvalue)\>, `parentStack`: ParentTrace[]) => *Promise*<AnnotationReturn\>

#### Type declaration

▸ (`annotation`: [*Annotation*](annotation.md)<[*objectValue*](../modules.md#objectvalue)\>, `parentStack`: ParentTrace[]): *Promise*<AnnotationReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [*Annotation*](annotation.md)<[*objectValue*](../modules.md#objectvalue)\> |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<AnnotationReturn\>

Defined in: [Transformers.ts:149](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L149)

___

### Annotations

• **Annotations**: (`annotations`: [*Annotation*](annotation.md)<[*objectValue*](../modules.md#objectvalue)\>[], `transformmed`: AnnotationReturn[], `parentStack`: ParentTrace[]) => *Promise*<AnnotationsReturn\>

#### Type declaration

▸ (`annotations`: [*Annotation*](annotation.md)<[*objectValue*](../modules.md#objectvalue)\>[], `transformmed`: AnnotationReturn[], `parentStack`: ParentTrace[]): *Promise*<AnnotationsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotations` | [*Annotation*](annotation.md)<[*objectValue*](../modules.md#objectvalue)\>[] |
| `transformmed` | AnnotationReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<AnnotationsReturn\>

Defined in: [Transformers.ts:215](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L215)

___

### EachOf

• **EachOf**: (`eachOf`: [*EachOf*](eachof.md), `transformmedChildren`: { `annotations?`: AnnotationsReturn ; `expressions?`: tripleExprReturn[] ; `semActs?`: SemActsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<EachOfReturn\>

#### Type declaration

▸ (`eachOf`: [*EachOf*](eachof.md), `transformmedChildren`: { `annotations?`: AnnotationsReturn ; `expressions?`: tripleExprReturn[] ; `semActs?`: SemActsReturn  }, `parentStack`: ParentTrace[]): *Promise*<EachOfReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eachOf` | [*EachOf*](eachof.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.annotations?` | AnnotationsReturn |
| `transformmedChildren.expressions?` | tripleExprReturn[] |
| `transformmedChildren.semActs?` | SemActsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<EachOfReturn\>

Defined in: [Transformers.ts:153](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L153)

___

### IriStem

• **IriStem**: (`iriStem`: [*IriStem*](iristem.md), `parentStack`: ParentTrace[]) => *Promise*<IriStemReturn\>

#### Type declaration

▸ (`iriStem`: [*IriStem*](iristem.md), `parentStack`: ParentTrace[]): *Promise*<IriStemReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iriStem` | [*IriStem*](iristem.md) |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<IriStemReturn\>

Defined in: [Transformers.ts:184](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L184)

___

### IriStemRange

• **IriStemRange**: (`iriStemRange`: [*IriStemRange*](iristemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| IriStemReturn)[]  }, `parentStack`: ParentTrace[]) => *Promise*<IriStemRangeReturn\>

#### Type declaration

▸ (`iriStemRange`: [*IriStemRange*](iristemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| IriStemReturn)[]  }, `parentStack`: ParentTrace[]): *Promise*<IriStemRangeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iriStemRange` | [*IriStemRange*](iristemrange.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.exclusions` | (*string* \| IriStemReturn)[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<IriStemRangeReturn\>

Defined in: [Transformers.ts:188](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L188)

___

### Language

• **Language**: (`language`: [*Language*](language.md), `parentStack`: ParentTrace[]) => *Promise*<LanguageReturn\>

#### Type declaration

▸ (`language`: [*Language*](language.md), `parentStack`: ParentTrace[]): *Promise*<LanguageReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | [*Language*](language.md) |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LanguageReturn\>

Defined in: [Transformers.ts:202](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L202)

___

### LanguageStem

• **LanguageStem**: (`languageStem`: [*LanguageStem*](languagestem.md), `parentStack`: ParentTrace[]) => *Promise*<LanguageStemReturn\>

#### Type declaration

▸ (`languageStem`: [*LanguageStem*](languagestem.md), `parentStack`: ParentTrace[]): *Promise*<LanguageStemReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageStem` | [*LanguageStem*](languagestem.md) |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LanguageStemReturn\>

Defined in: [Transformers.ts:206](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L206)

___

### LanguageStemRange

• **LanguageStemRange**: (`languageStemRange`: [*LanguageStemRange*](languagestemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| LanguageStemReturn)[]  }, `parentStack`: ParentTrace[]) => *Promise*<LanguageStemRangeReturn\>

#### Type declaration

▸ (`languageStemRange`: [*LanguageStemRange*](languagestemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| LanguageStemReturn)[]  }, `parentStack`: ParentTrace[]): *Promise*<LanguageStemRangeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageStemRange` | [*LanguageStemRange*](languagestemrange.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.exclusions` | (*string* \| LanguageStemReturn)[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LanguageStemRangeReturn\>

Defined in: [Transformers.ts:210](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L210)

___

### LiteralStem

• **LiteralStem**: (`literalStem`: [*LiteralStem*](literalstem.md), `parentStack`: ParentTrace[]) => *Promise*<LiteralStemReturn\>

#### Type declaration

▸ (`literalStem`: [*LiteralStem*](literalstem.md), `parentStack`: ParentTrace[]): *Promise*<LiteralStemReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `literalStem` | [*LiteralStem*](literalstem.md) |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LiteralStemReturn\>

Defined in: [Transformers.ts:193](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L193)

___

### LiteralStemRange

• **LiteralStemRange**: (`literalStemRange`: [*LiteralStemRange*](literalstemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| LiteralStemReturn)[]  }, `parentStack`: ParentTrace[]) => *Promise*<LiteralStemRangeReturn\>

#### Type declaration

▸ (`literalStemRange`: [*LiteralStemRange*](literalstemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| LiteralStemReturn)[]  }, `parentStack`: ParentTrace[]): *Promise*<LiteralStemRangeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `literalStemRange` | [*LiteralStemRange*](literalstemrange.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.exclusions` | (*string* \| LiteralStemReturn)[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<LiteralStemRangeReturn\>

Defined in: [Transformers.ts:197](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L197)

___

### NodeConstraint

• **NodeConstraint**: (`nodeConstraint`: [*NodeConstraint*](nodeconstraint.md), `transformmedChildren`: { `values?`: valueSetValueReturn[]  }, `parentStack`: ParentTrace[]) => *Promise*<NodeConstraintReturn\>

#### Type declaration

▸ (`nodeConstraint`: [*NodeConstraint*](nodeconstraint.md), `transformmedChildren`: { `values?`: valueSetValueReturn[]  }, `parentStack`: ParentTrace[]): *Promise*<NodeConstraintReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeConstraint` | [*NodeConstraint*](nodeconstraint.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.values?` | valueSetValueReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<NodeConstraintReturn\>

Defined in: [Transformers.ts:112](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L112)

___

### ObjectLiteral

• **ObjectLiteral**: (`objectLiteral`: [*ObjectLiteral*](objectliteral.md), `parentStack`: ParentTrace[]) => *Promise*<ObjectLiteralReturn\>

#### Type declaration

▸ (`objectLiteral`: [*ObjectLiteral*](objectliteral.md), `parentStack`: ParentTrace[]): *Promise*<ObjectLiteralReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectLiteral` | [*ObjectLiteral*](objectliteral.md) |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ObjectLiteralReturn\>

Defined in: [Transformers.ts:180](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L180)

___

### OneOf

• **OneOf**: (`oneOf`: [*OneOf*](oneof.md), `transformmedChildren`: { `annotations?`: AnnotationsReturn ; `expressions?`: tripleExprReturn[] ; `semActs?`: SemActsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<OneOfReturn\>

#### Type declaration

▸ (`oneOf`: [*OneOf*](oneof.md), `transformmedChildren`: { `annotations?`: AnnotationsReturn ; `expressions?`: tripleExprReturn[] ; `semActs?`: SemActsReturn  }, `parentStack`: ParentTrace[]): *Promise*<OneOfReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oneOf` | [*OneOf*](oneof.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.annotations?` | AnnotationsReturn |
| `transformmedChildren.expressions?` | tripleExprReturn[] |
| `transformmedChildren.semActs?` | SemActsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<OneOfReturn\>

Defined in: [Transformers.ts:162](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L162)

___

### Schema

• **Schema**: (`schema`: [*Schema*](schema.md), `transformmedChildren`: { `prefixes?`: prefixesReturn ; `shapes?`: shapesReturn ; `start?`: shapeExprReturn ; `startActs?`: SemActReturn[]  }) => *Promise*<SchemaReturn\>

#### Type declaration

▸ (`schema`: [*Schema*](schema.md), `transformmedChildren`: { `prefixes?`: prefixesReturn ; `shapes?`: shapesReturn ; `start?`: shapeExprReturn ; `startActs?`: SemActReturn[]  }): *Promise*<SchemaReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [*Schema*](schema.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.prefixes?` | prefixesReturn |
| `transformmedChildren.shapes?` | shapesReturn |
| `transformmedChildren.start?` | shapeExprReturn |
| `transformmedChildren.startActs?` | SemActReturn[] |

**Returns:** *Promise*<SchemaReturn\>

Defined in: [Transformers.ts:65](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L65)

___

### SemAct

• **SemAct**: (`semAct`: [*SemAct*](semact.md), `parentStack`: ParentTrace[]) => *Promise*<SemActReturn\>

#### Type declaration

▸ (`semAct`: [*SemAct*](semact.md), `parentStack`: ParentTrace[]): *Promise*<SemActReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semAct` | [*SemAct*](semact.md) |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<SemActReturn\>

Defined in: [Transformers.ts:78](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L78)

___

### SemActs

• **SemActs**: (`semActs`: [*SemAct*](semact.md)[], `transformmed`: SemActReturn[], `parentStack`: ParentTrace[]) => *Promise*<SemActsReturn\>

#### Type declaration

▸ (`semActs`: [*SemAct*](semact.md)[], `transformmed`: SemActReturn[], `parentStack`: ParentTrace[]): *Promise*<SemActsReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semActs` | [*SemAct*](semact.md)[] |
| `transformmed` | SemActReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<SemActsReturn\>

Defined in: [Transformers.ts:220](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L220)

___

### Shape

• **Shape**: (`shape`: [*Shape*](shape.md), `transformmedChildren`: { `annotations?`: AnnotationsReturn ; `expression?`: tripleExprReturn ; `semActs?`: SemActsReturn  }, `parentStack`: ParentTrace[]) => *Promise*<ShapeReturn\>

#### Type declaration

▸ (`shape`: [*Shape*](shape.md), `transformmedChildren`: { `annotations?`: AnnotationsReturn ; `expression?`: tripleExprReturn ; `semActs?`: SemActsReturn  }, `parentStack`: ParentTrace[]): *Promise*<ShapeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [*Shape*](shape.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.annotations?` | AnnotationsReturn |
| `transformmedChildren.expression?` | tripleExprReturn |
| `transformmedChildren.semActs?` | SemActsReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeReturn\>

Defined in: [Transformers.ts:117](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L117)

___

### ShapeAnd

• **ShapeAnd**: (`shapeAnd`: [*ShapeAnd*](shapeand.md), `transformmedChildren`: { `shapeExprs`: shapeExprReturn[]  }, `parentStack`: ParentTrace[]) => *Promise*<ShapeAndReturn\>

#### Type declaration

▸ (`shapeAnd`: [*ShapeAnd*](shapeand.md), `transformmedChildren`: { `shapeExprs`: shapeExprReturn[]  }, `parentStack`: ParentTrace[]): *Promise*<ShapeAndReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeAnd` | [*ShapeAnd*](shapeand.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.shapeExprs` | shapeExprReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeAndReturn\>

Defined in: [Transformers.ts:101](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L101)

___

### ShapeNot

• **ShapeNot**: (`shapeNot`: [*ShapeNot*](shapenot.md), `transformmedChild`: { `shapeExpr`: shapeExprReturn  }, `parentStack`: ParentTrace[]) => *Promise*<ShapeNotReturn\>

#### Type declaration

▸ (`shapeNot`: [*ShapeNot*](shapenot.md), `transformmedChild`: { `shapeExpr`: shapeExprReturn  }, `parentStack`: ParentTrace[]): *Promise*<ShapeNotReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeNot` | [*ShapeNot*](shapenot.md) |
| `transformmedChild` | *object* |
| `transformmedChild.shapeExpr` | shapeExprReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeNotReturn\>

Defined in: [Transformers.ts:106](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L106)

___

### ShapeOr

• **ShapeOr**: (`shapeOr`: [*ShapeOr*](shapeor.md), `transformmedChildren`: { `shapeExprs`: shapeExprReturn[]  }, `parentStack`: ParentTrace[]) => *Promise*<ShapeOrReturn\>

#### Type declaration

▸ (`shapeOr`: [*ShapeOr*](shapeor.md), `transformmedChildren`: { `shapeExprs`: shapeExprReturn[]  }, `parentStack`: ParentTrace[]): *Promise*<ShapeOrReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeOr` | [*ShapeOr*](shapeor.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.shapeExprs` | shapeExprReturn[] |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<ShapeOrReturn\>

Defined in: [Transformers.ts:96](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L96)

___

### ShapeRef

• **ShapeRef**: (`shapeRef`: [*ShapeRef*](shaperef.md), `parents`: *unknown*[]) => *Promise*<ShapeRefReturn\>

#### Type declaration

▸ (`shapeRef`: [*ShapeRef*](shaperef.md), `parents`: *unknown*[]): *Promise*<ShapeRefReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeRef` | [*ShapeRef*](shaperef.md) |
| `parents` | *unknown*[] |

**Returns:** *Promise*<ShapeRefReturn\>

Defined in: [Transformers.ts:111](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L111)

___

### TripleConstraint

• **TripleConstraint**: (`TripleConstraint`: [*TripleConstraint*](tripleconstraint.md), `transformmedChildren`: { `annotations?`: AnnotationsReturn ; `semActs?`: SemActsReturn ; `valueExpr?`: shapeExprReturn  }, `parentStack`: ParentTrace[]) => *Promise*<TripleConstraintReturn\>

#### Type declaration

▸ (`TripleConstraint`: [*TripleConstraint*](tripleconstraint.md), `transformmedChildren`: { `annotations?`: AnnotationsReturn ; `semActs?`: SemActsReturn ; `valueExpr?`: shapeExprReturn  }, `parentStack`: ParentTrace[]): *Promise*<TripleConstraintReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `TripleConstraint` | [*TripleConstraint*](tripleconstraint.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.annotations?` | AnnotationsReturn |
| `transformmedChildren.semActs?` | SemActsReturn |
| `transformmedChildren.valueExpr?` | shapeExprReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<TripleConstraintReturn\>

Defined in: [Transformers.ts:171](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L171)

___

### prefixes

• **prefixes**: (`prefixes`: [*prefixes*](../modules.md#prefixes), `parentStack`: ParentTrace[]) => *Promise*<prefixesReturn\>

#### Type declaration

▸ (`prefixes`: [*prefixes*](../modules.md#prefixes), `parentStack`: ParentTrace[]): *Promise*<prefixesReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefixes` | [*prefixes*](../modules.md#prefixes) |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<prefixesReturn\>

Defined in: [Transformers.ts:74](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L74)

___

### shapeExpr

• **shapeExpr**: (`shapeExpr`: [*shapeExpr*](../modules.md#shapeexpr), `transformmedChild`: *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeRefReturn \| NodeConstraintReturn \| ShapeReturn, `parentStack`: ParentTrace[]) => *Promise*<shapeExprReturn\>

#### Type declaration

▸ (`shapeExpr`: [*shapeExpr*](../modules.md#shapeexpr), `transformmedChild`: *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeRefReturn \| NodeConstraintReturn \| ShapeReturn, `parentStack`: ParentTrace[]): *Promise*<shapeExprReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeExpr` | [*shapeExpr*](../modules.md#shapeexpr) |
| `transformmedChild` | *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeRefReturn \| NodeConstraintReturn \| ShapeReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<shapeExprReturn\>

Defined in: [Transformers.ts:79](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L79)

___

### shapes

• **shapes**: (`shapes`: [*shapes*](../modules.md#shapes), `transformmedChildren`: *Record*<string, shapeExprReturn\>, `parentStack`: ParentTrace[]) => *Promise*<shapesReturn\>

#### Type declaration

▸ (`shapes`: [*shapes*](../modules.md#shapes), `transformmedChildren`: *Record*<string, shapeExprReturn\>, `parentStack`: ParentTrace[]): *Promise*<shapesReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [*shapes*](../modules.md#shapes) |
| `transformmedChildren` | *Record*<string, shapeExprReturn\> |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<shapesReturn\>

Defined in: [Transformers.ts:91](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L91)

___

### tripleExpr

• **tripleExpr**: (`tripleExpr`: [*tripleExpr*](../modules.md#tripleexpr), `transformmedChild`: *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn, `parentStack`: ParentTrace[]) => *Promise*<tripleExprReturn\>

#### Type declaration

▸ (`tripleExpr`: [*tripleExpr*](../modules.md#tripleexpr), `transformmedChild`: *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn, `parentStack`: ParentTrace[]): *Promise*<tripleExprReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tripleExpr` | [*tripleExpr*](../modules.md#tripleexpr) |
| `transformmedChild` | *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<tripleExprReturn\>

Defined in: [Transformers.ts:140](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L140)

___

### valueSetValue

• **valueSetValue**: (`valueSetValue`: [*valueSetValue*](../modules.md#valuesetvalue), `transformmedChild`: *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn, `parentStack`: ParentTrace[]) => *Promise*<valueSetValueReturn\>

#### Type declaration

▸ (`valueSetValue`: [*valueSetValue*](../modules.md#valuesetvalue), `transformmedChild`: *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn, `parentStack`: ParentTrace[]): *Promise*<valueSetValueReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSetValue` | [*valueSetValue*](../modules.md#valuesetvalue) |
| `transformmedChild` | *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn |
| `parentStack` | ParentTrace[] |

**Returns:** *Promise*<valueSetValueReturn\>

Defined in: [Transformers.ts:126](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/Transformers.ts#L126)
