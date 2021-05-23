[shexj-traverser](../README.md) / [Exports](../modules.md) / Transformers

# Interface: Transformers<SchemaReturn, prefixesReturn, SemActReturn, shapeExprReturn, shapesReturn, ShapeOrReturn, ShapeAndReturn, ShapeNotReturn, ShapeRefReturn, NodeConstraintReturn, ShapeReturn, valueSetValueReturn, tripleExprReturn, AnnotationReturn, EachOfReturn, OneOfReturn, TripleConstraintReturn, ObjectLiteralReturn, IriStemReturn, IriStemRangeReturn, LiteralStemReturn, LiteralStemRangeReturn, LanguageReturn, LanguageStemReturn, LanguageStemRangeReturn\>

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

## Table of contents

### Properties

- [Annotation](transformers.md#annotation)
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

• **Annotation**: (`annotation`: [*Annotation*](annotation.md)<[*objectValue*](../modules.md#objectvalue)\>) => *Promise*<AnnotationReturn\>

#### Type declaration

▸ (`annotation`: [*Annotation*](annotation.md)<[*objectValue*](../modules.md#objectvalue)\>): *Promise*<AnnotationReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [*Annotation*](annotation.md)<[*objectValue*](../modules.md#objectvalue)\> |

**Returns:** *Promise*<AnnotationReturn\>

Defined in: [Transformers.ts:129](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L129)

___

### EachOf

• **EachOf**: (`eachOf`: [*EachOf*](eachof.md), `transformmedChildren`: { `annotations?`: AnnotationReturn[] ; `expressions?`: tripleExprReturn[] ; `semActs?`: SemActReturn[]  }) => *Promise*<EachOfReturn\>

#### Type declaration

▸ (`eachOf`: [*EachOf*](eachof.md), `transformmedChildren`: { `annotations?`: AnnotationReturn[] ; `expressions?`: tripleExprReturn[] ; `semActs?`: SemActReturn[]  }): *Promise*<EachOfReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eachOf` | [*EachOf*](eachof.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.annotations?` | AnnotationReturn[] |
| `transformmedChildren.expressions?` | tripleExprReturn[] |
| `transformmedChildren.semActs?` | SemActReturn[] |

**Returns:** *Promise*<EachOfReturn\>

Defined in: [Transformers.ts:130](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L130)

___

### IriStem

• **IriStem**: (`iriStem`: [*IriStem*](iristem.md)) => *Promise*<IriStemReturn\>

#### Type declaration

▸ (`iriStem`: [*IriStem*](iristem.md)): *Promise*<IriStemReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iriStem` | [*IriStem*](iristem.md) |

**Returns:** *Promise*<IriStemReturn\>

Defined in: [Transformers.ts:155](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L155)

___

### IriStemRange

• **IriStemRange**: (`iriStemRange`: [*IriStemRange*](iristemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| IriStemReturn)[]  }) => *Promise*<IriStemRangeReturn\>

#### Type declaration

▸ (`iriStemRange`: [*IriStemRange*](iristemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| IriStemReturn)[]  }): *Promise*<IriStemRangeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `iriStemRange` | [*IriStemRange*](iristemrange.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.exclusions` | (*string* \| IriStemReturn)[] |

**Returns:** *Promise*<IriStemRangeReturn\>

Defined in: [Transformers.ts:156](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L156)

___

### Language

• **Language**: (`language`: [*Language*](language.md)) => *Promise*<LanguageReturn\>

#### Type declaration

▸ (`language`: [*Language*](language.md)): *Promise*<LanguageReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | [*Language*](language.md) |

**Returns:** *Promise*<LanguageReturn\>

Defined in: [Transformers.ts:165](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L165)

___

### LanguageStem

• **LanguageStem**: (`languageStem`: [*LanguageStem*](languagestem.md)) => *Promise*<LanguageStemReturn\>

#### Type declaration

▸ (`languageStem`: [*LanguageStem*](languagestem.md)): *Promise*<LanguageStemReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageStem` | [*LanguageStem*](languagestem.md) |

**Returns:** *Promise*<LanguageStemReturn\>

Defined in: [Transformers.ts:166](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L166)

___

### LanguageStemRange

• **LanguageStemRange**: (`languageStemRange`: [*LanguageStemRange*](languagestemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| LanguageStemReturn)[]  }) => *Promise*<LanguageStemRangeReturn\>

#### Type declaration

▸ (`languageStemRange`: [*LanguageStemRange*](languagestemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| LanguageStemReturn)[]  }): *Promise*<LanguageStemRangeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageStemRange` | [*LanguageStemRange*](languagestemrange.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.exclusions` | (*string* \| LanguageStemReturn)[] |

**Returns:** *Promise*<LanguageStemRangeReturn\>

Defined in: [Transformers.ts:167](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L167)

___

### LiteralStem

• **LiteralStem**: (`literalStem`: [*LiteralStem*](literalstem.md)) => *Promise*<LiteralStemReturn\>

#### Type declaration

▸ (`literalStem`: [*LiteralStem*](literalstem.md)): *Promise*<LiteralStemReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `literalStem` | [*LiteralStem*](literalstem.md) |

**Returns:** *Promise*<LiteralStemReturn\>

Defined in: [Transformers.ts:160](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L160)

___

### LiteralStemRange

• **LiteralStemRange**: (`literalStemRange`: [*LiteralStemRange*](literalstemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| LiteralStemReturn)[]  }) => *Promise*<LiteralStemRangeReturn\>

#### Type declaration

▸ (`literalStemRange`: [*LiteralStemRange*](literalstemrange.md), `transformmedChildren`: { `exclusions`: (*string* \| LiteralStemReturn)[]  }): *Promise*<LiteralStemRangeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `literalStemRange` | [*LiteralStemRange*](literalstemrange.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.exclusions` | (*string* \| LiteralStemReturn)[] |

**Returns:** *Promise*<LiteralStemRangeReturn\>

Defined in: [Transformers.ts:161](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L161)

___

### NodeConstraint

• **NodeConstraint**: (`nodeConstraint`: [*NodeConstraint*](nodeconstraint.md), `transformmedChildren`: { `values?`: valueSetValueReturn[]  }) => *Promise*<NodeConstraintReturn\>

#### Type declaration

▸ (`nodeConstraint`: [*NodeConstraint*](nodeconstraint.md), `transformmedChildren`: { `values?`: valueSetValueReturn[]  }): *Promise*<NodeConstraintReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeConstraint` | [*NodeConstraint*](nodeconstraint.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.values?` | valueSetValueReturn[] |

**Returns:** *Promise*<NodeConstraintReturn\>

Defined in: [Transformers.ts:96](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L96)

___

### ObjectLiteral

• **ObjectLiteral**: (`objectLiteral`: [*ObjectLiteral*](objectliteral.md)) => *Promise*<ObjectLiteralReturn\>

#### Type declaration

▸ (`objectLiteral`: [*ObjectLiteral*](objectliteral.md)): *Promise*<ObjectLiteralReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectLiteral` | [*ObjectLiteral*](objectliteral.md) |

**Returns:** *Promise*<ObjectLiteralReturn\>

Defined in: [Transformers.ts:154](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L154)

___

### OneOf

• **OneOf**: (`oneOf`: [*OneOf*](oneof.md), `transformmedChildren`: { `annotations?`: AnnotationReturn[] ; `expressions?`: tripleExprReturn[] ; `semActs?`: SemActReturn[]  }) => *Promise*<OneOfReturn\>

#### Type declaration

▸ (`oneOf`: [*OneOf*](oneof.md), `transformmedChildren`: { `annotations?`: AnnotationReturn[] ; `expressions?`: tripleExprReturn[] ; `semActs?`: SemActReturn[]  }): *Promise*<OneOfReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oneOf` | [*OneOf*](oneof.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.annotations?` | AnnotationReturn[] |
| `transformmedChildren.expressions?` | tripleExprReturn[] |
| `transformmedChildren.semActs?` | SemActReturn[] |

**Returns:** *Promise*<OneOfReturn\>

Defined in: [Transformers.ts:138](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L138)

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

Defined in: [Transformers.ts:57](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L57)

___

### SemAct

• **SemAct**: (`semAct`: [*SemAct*](semact.md)) => *Promise*<SemActReturn\>

#### Type declaration

▸ (`semAct`: [*SemAct*](semact.md)): *Promise*<SemActReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semAct` | [*SemAct*](semact.md) |

**Returns:** *Promise*<SemActReturn\>

Defined in: [Transformers.ts:67](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L67)

___

### Shape

• **Shape**: (`shape`: [*Shape*](shape.md), `transformmedChildren`: { `annotations?`: AnnotationReturn[] ; `expression?`: tripleExprReturn ; `semActs?`: SemActReturn[]  }) => *Promise*<ShapeReturn\>

#### Type declaration

▸ (`shape`: [*Shape*](shape.md), `transformmedChildren`: { `annotations?`: AnnotationReturn[] ; `expression?`: tripleExprReturn ; `semActs?`: SemActReturn[]  }): *Promise*<ShapeReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [*Shape*](shape.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.annotations?` | AnnotationReturn[] |
| `transformmedChildren.expression?` | tripleExprReturn |
| `transformmedChildren.semActs?` | SemActReturn[] |

**Returns:** *Promise*<ShapeReturn\>

Defined in: [Transformers.ts:100](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L100)

___

### ShapeAnd

• **ShapeAnd**: (`shapeAnd`: [*ShapeAnd*](shapeand.md), `transformmedChildren`: { `shapeExprs`: shapeExprReturn[]  }) => *Promise*<ShapeAndReturn\>

#### Type declaration

▸ (`shapeAnd`: [*ShapeAnd*](shapeand.md), `transformmedChildren`: { `shapeExprs`: shapeExprReturn[]  }): *Promise*<ShapeAndReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeAnd` | [*ShapeAnd*](shapeand.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.shapeExprs` | shapeExprReturn[] |

**Returns:** *Promise*<ShapeAndReturn\>

Defined in: [Transformers.ts:87](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L87)

___

### ShapeNot

• **ShapeNot**: (`shapeNot`: [*ShapeNot*](shapenot.md), `transformmedChild`: { `shapeExpr`: shapeExprReturn  }) => *Promise*<ShapeNotReturn\>

#### Type declaration

▸ (`shapeNot`: [*ShapeNot*](shapenot.md), `transformmedChild`: { `shapeExpr`: shapeExprReturn  }): *Promise*<ShapeNotReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeNot` | [*ShapeNot*](shapenot.md) |
| `transformmedChild` | *object* |
| `transformmedChild.shapeExpr` | shapeExprReturn |

**Returns:** *Promise*<ShapeNotReturn\>

Defined in: [Transformers.ts:91](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L91)

___

### ShapeOr

• **ShapeOr**: (`shapeOr`: [*ShapeOr*](shapeor.md), `transformmedChildren`: { `shapeExprs`: shapeExprReturn[]  }) => *Promise*<ShapeOrReturn\>

#### Type declaration

▸ (`shapeOr`: [*ShapeOr*](shapeor.md), `transformmedChildren`: { `shapeExprs`: shapeExprReturn[]  }): *Promise*<ShapeOrReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeOr` | [*ShapeOr*](shapeor.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.shapeExprs` | shapeExprReturn[] |

**Returns:** *Promise*<ShapeOrReturn\>

Defined in: [Transformers.ts:83](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L83)

___

### ShapeRef

• **ShapeRef**: (`shapeRef`: [*ShapeRef*](shaperef.md)) => *Promise*<ShapeRefReturn\>

#### Type declaration

▸ (`shapeRef`: [*ShapeRef*](shaperef.md)): *Promise*<ShapeRefReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeRef` | [*ShapeRef*](shaperef.md) |

**Returns:** *Promise*<ShapeRefReturn\>

Defined in: [Transformers.ts:95](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L95)

___

### TripleConstraint

• **TripleConstraint**: (`TripleConstraint`: [*TripleConstraint*](tripleconstraint.md), `transformmedChildren`: { `annotations?`: AnnotationReturn[] ; `semActs?`: SemActReturn[] ; `valueExpr?`: shapeExprReturn  }) => *Promise*<TripleConstraintReturn\>

#### Type declaration

▸ (`TripleConstraint`: [*TripleConstraint*](tripleconstraint.md), `transformmedChildren`: { `annotations?`: AnnotationReturn[] ; `semActs?`: SemActReturn[] ; `valueExpr?`: shapeExprReturn  }): *Promise*<TripleConstraintReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `TripleConstraint` | [*TripleConstraint*](tripleconstraint.md) |
| `transformmedChildren` | *object* |
| `transformmedChildren.annotations?` | AnnotationReturn[] |
| `transformmedChildren.semActs?` | SemActReturn[] |
| `transformmedChildren.valueExpr?` | shapeExprReturn |

**Returns:** *Promise*<TripleConstraintReturn\>

Defined in: [Transformers.ts:146](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L146)

___

### prefixes

• **prefixes**: (`prefixes`: [*prefixes*](../modules.md#prefixes)) => *Promise*<prefixesReturn\>

#### Type declaration

▸ (`prefixes`: [*prefixes*](../modules.md#prefixes)): *Promise*<prefixesReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefixes` | [*prefixes*](../modules.md#prefixes) |

**Returns:** *Promise*<prefixesReturn\>

Defined in: [Transformers.ts:66](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L66)

___

### shapeExpr

• **shapeExpr**: (`shapeExpr`: [*shapeExpr*](../modules.md#shapeexpr), `transformmedChild`: *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeRefReturn \| NodeConstraintReturn \| ShapeReturn) => *Promise*<shapeExprReturn\>

#### Type declaration

▸ (`shapeExpr`: [*shapeExpr*](../modules.md#shapeexpr), `transformmedChild`: *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeRefReturn \| NodeConstraintReturn \| ShapeReturn): *Promise*<shapeExprReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeExpr` | [*shapeExpr*](../modules.md#shapeexpr) |
| `transformmedChild` | *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeRefReturn \| NodeConstraintReturn \| ShapeReturn |

**Returns:** *Promise*<shapeExprReturn\>

Defined in: [Transformers.ts:68](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L68)

___

### shapes

• **shapes**: (`shapes`: [*shapes*](../modules.md#shapes), `transformmedChildren`: *Record*<string, shapeExprReturn\>) => *Promise*<shapesReturn\>

#### Type declaration

▸ (`shapes`: [*shapes*](../modules.md#shapes), `transformmedChildren`: *Record*<string, shapeExprReturn\>): *Promise*<shapesReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [*shapes*](../modules.md#shapes) |
| `transformmedChildren` | *Record*<string, shapeExprReturn\> |

**Returns:** *Promise*<shapesReturn\>

Defined in: [Transformers.ts:79](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L79)

___

### tripleExpr

• **tripleExpr**: (`tripleExpr`: [*tripleExpr*](../modules.md#tripleexpr), `transformmedChild`: *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn) => *Promise*<tripleExprReturn\>

#### Type declaration

▸ (`tripleExpr`: [*tripleExpr*](../modules.md#tripleexpr), `transformmedChild`: *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn): *Promise*<tripleExprReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tripleExpr` | [*tripleExpr*](../modules.md#tripleexpr) |
| `transformmedChild` | *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn |

**Returns:** *Promise*<tripleExprReturn\>

Defined in: [Transformers.ts:121](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L121)

___

### valueSetValue

• **valueSetValue**: (`valueSetValue`: [*valueSetValue*](../modules.md#valuesetvalue), `transformmedChild`: *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn) => *Promise*<valueSetValueReturn\>

#### Type declaration

▸ (`valueSetValue`: [*valueSetValue*](../modules.md#valuesetvalue), `transformmedChild`: *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn): *Promise*<valueSetValueReturn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueSetValue` | [*valueSetValue*](../modules.md#valuesetvalue) |
| `transformmedChild` | *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn |

**Returns:** *Promise*<valueSetValueReturn\>

Defined in: [Transformers.ts:108](https://github.com/o-development/shexj-traverser/blob/6850f6c/lib/Transformers.ts#L108)
