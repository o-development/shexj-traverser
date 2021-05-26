[shexj-traverser](README.md) / Exports

# shexj-traverser

## Table of contents

### Interfaces

- [Annotation](interfaces/annotation.md)
- [EachOf](interfaces/eachof.md)
- [IriStem](interfaces/iristem.md)
- [IriStemRange](interfaces/iristemrange.md)
- [Language](interfaces/language.md)
- [LanguageStem](interfaces/languagestem.md)
- [LanguageStemRange](interfaces/languagestemrange.md)
- [LiteralStem](interfaces/literalstem.md)
- [LiteralStemRange](interfaces/literalstemrange.md)
- [NodeConstraint](interfaces/nodeconstraint.md)
- [ObjectLiteral](interfaces/objectliteral.md)
- [OneOf](interfaces/oneof.md)
- [Schema](interfaces/schema.md)
- [SemAct](interfaces/semact.md)
- [Shape](interfaces/shape.md)
- [ShapeAnd](interfaces/shapeand.md)
- [ShapeNot](interfaces/shapenot.md)
- [ShapeOr](interfaces/shapeor.md)
- [ShapeRef](interfaces/shaperef.md)
- [Transformers](interfaces/transformers.md)
- [TripleConstraint](interfaces/tripleconstraint.md)
- [Wildcard](interfaces/wildcard.md)

### Type aliases

- [objectValue](modules.md#objectvalue)
- [prefixes](modules.md#prefixes)
- [shapeExpr](modules.md#shapeexpr)
- [shapeExprObject](modules.md#shapeexprobject)
- [shapes](modules.md#shapes)
- [tripleExpr](modules.md#tripleexpr)
- [tripleExprObject](modules.md#tripleexprobject)
- [valueSetValue](modules.md#valuesetvalue)

### Functions

- [traverseShex](modules.md#traverseshex)

## Type aliases

### objectValue

Ƭ **objectValue**: *string* \| [*ObjectLiteral*](interfaces/objectliteral.md)

Defined in: [shexTypes.ts:55](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/shexTypes.ts#L55)

___

### prefixes

Ƭ **prefixes**: *Record*<string, string\>

Defined in: [shexTypes.ts:12](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/shexTypes.ts#L12)

___

### shapeExpr

Ƭ **shapeExpr**: [*shapeExprObject*](modules.md#shapeexprobject) \| *string*

Defined in: [shexTypes.ts:13](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/shexTypes.ts#L13)

___

### shapeExprObject

Ƭ **shapeExprObject**: [*ShapeOr*](interfaces/shapeor.md) \| [*ShapeAnd*](interfaces/shapeand.md) \| [*ShapeNot*](interfaces/shapenot.md) \| [*NodeConstraint*](interfaces/nodeconstraint.md) \| [*Shape*](interfaces/shape.md) \| [*ShapeRef*](interfaces/shaperef.md)

Defined in: [shexTypes.ts:14](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/shexTypes.ts#L14)

___

### shapes

Ƭ **shapes**: *Record*<string, [*shapeExprObject*](modules.md#shapeexprobject)\>

Defined in: [shexTypes.ts:82](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/shexTypes.ts#L82)

___

### tripleExpr

Ƭ **tripleExpr**: [*tripleExprObject*](modules.md#tripleexprobject) \| *string*

Defined in: [shexTypes.ts:92](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/shexTypes.ts#L92)

___

### tripleExprObject

Ƭ **tripleExprObject**: [*EachOf*](interfaces/eachof.md) \| [*OneOf*](interfaces/oneof.md) \| [*TripleConstraint*](interfaces/tripleconstraint.md)

Defined in: [shexTypes.ts:93](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/shexTypes.ts#L93)

___

### valueSetValue

Ƭ **valueSetValue**: [*objectValue*](modules.md#objectvalue) \| [*IriStem*](interfaces/iristem.md) \| [*IriStemRange*](interfaces/iristemrange.md) \| [*LiteralStem*](interfaces/literalstem.md) \| [*LiteralStemRange*](interfaces/literalstemrange.md) \| [*Language*](interfaces/language.md) \| [*LanguageStem*](interfaces/languagestem.md) \| [*LanguageStemRange*](interfaces/languagestemrange.md)

Defined in: [shexTypes.ts:45](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/shexTypes.ts#L45)

## Functions

### traverseShex

▸ **traverseShex**<SchemaReturn, prefixesReturn, SemActReturn, shapeExprReturn, shapesReturn, ShapeOrReturn, ShapeAndReturn, ShapeNotReturn, ShapeRefReturn, NodeConstraintReturn, ShapeReturn, valueSetValueReturn, tripleExprReturn, AnnotationReturn, EachOfReturn, OneOfReturn, TripleConstraintReturn, ObjectLiteralReturn, IriStemReturn, IriStemRangeReturn, LiteralStemReturn, LiteralStemRangeReturn, LanguageReturn, LanguageStemReturn, LanguageStemRangeReturn, AnnotationsReturn, SemActsReturn\>(`shexSchema`: [*Schema*](interfaces/schema.md), `transformers`: *Partial*<[*Transformers*](interfaces/transformers.md)<SchemaReturn, prefixesReturn, SemActReturn, shapeExprReturn, shapesReturn, ShapeOrReturn, ShapeAndReturn, ShapeNotReturn, ShapeRefReturn, NodeConstraintReturn, ShapeReturn, valueSetValueReturn, tripleExprReturn, AnnotationReturn, EachOfReturn, OneOfReturn, TripleConstraintReturn, ObjectLiteralReturn, IriStemReturn, IriStemRangeReturn, LiteralStemReturn, LiteralStemRangeReturn, LanguageReturn, LanguageStemReturn, LanguageStemRangeReturn, AnnotationsReturn, SemActsReturn\>\>): *Promise*<SchemaReturn\>

#### Type parameters

| Name | Default |
| :------ | :------ |
| `SchemaReturn` | [*Schema*](interfaces/schema.md) |
| `prefixesReturn` | [*prefixes*](modules.md#prefixes) |
| `SemActReturn` | [*SemAct*](interfaces/semact.md) |
| `shapeExprReturn` | [*shapeExpr*](modules.md#shapeexpr) |
| `shapesReturn` | [*shapes*](modules.md#shapes) |
| `ShapeOrReturn` | [*ShapeOr*](interfaces/shapeor.md) |
| `ShapeAndReturn` | [*ShapeAnd*](interfaces/shapeand.md) |
| `ShapeNotReturn` | [*ShapeNot*](interfaces/shapenot.md) |
| `ShapeRefReturn` | [*ShapeRef*](interfaces/shaperef.md) |
| `NodeConstraintReturn` | [*NodeConstraint*](interfaces/nodeconstraint.md) |
| `ShapeReturn` | [*Shape*](interfaces/shape.md) |
| `valueSetValueReturn` | [*valueSetValue*](modules.md#valuesetvalue) |
| `tripleExprReturn` | [*tripleExpr*](modules.md#tripleexpr) |
| `AnnotationReturn` | [*Annotation*](interfaces/annotation.md)<[*objectValue*](modules.md#objectvalue)\> |
| `EachOfReturn` | [*EachOf*](interfaces/eachof.md) |
| `OneOfReturn` | [*OneOf*](interfaces/oneof.md) |
| `TripleConstraintReturn` | [*TripleConstraint*](interfaces/tripleconstraint.md) |
| `ObjectLiteralReturn` | [*ObjectLiteral*](interfaces/objectliteral.md) |
| `IriStemReturn` | [*IriStem*](interfaces/iristem.md) |
| `IriStemRangeReturn` | [*IriStemRange*](interfaces/iristemrange.md) |
| `LiteralStemReturn` | [*LiteralStem*](interfaces/literalstem.md) |
| `LiteralStemRangeReturn` | [*LiteralStemRange*](interfaces/literalstemrange.md) |
| `LanguageReturn` | [*Language*](interfaces/language.md) |
| `LanguageStemReturn` | [*LanguageStem*](interfaces/languagestem.md) |
| `LanguageStemRangeReturn` | [*LanguageStemRange*](interfaces/languagestemrange.md) |
| `AnnotationsReturn` | AnnotationReturn[] |
| `SemActsReturn` | SemActReturn[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shexSchema` | [*Schema*](interfaces/schema.md) |
| `transformers` | *Partial*<[*Transformers*](interfaces/transformers.md)<SchemaReturn, prefixesReturn, SemActReturn, shapeExprReturn, shapesReturn, ShapeOrReturn, ShapeAndReturn, ShapeNotReturn, ShapeRefReturn, NodeConstraintReturn, ShapeReturn, valueSetValueReturn, tripleExprReturn, AnnotationReturn, EachOfReturn, OneOfReturn, TripleConstraintReturn, ObjectLiteralReturn, IriStemReturn, IriStemRangeReturn, LiteralStemReturn, LiteralStemRangeReturn, LanguageReturn, LanguageStemReturn, LanguageStemRangeReturn, AnnotationsReturn, SemActsReturn\>\> |

**Returns:** *Promise*<SchemaReturn\>

Defined in: [traverseShex.ts:32](https://github.com/o-development/shexj-traverser/blob/a00dc5a/lib/traverseShex.ts#L32)
