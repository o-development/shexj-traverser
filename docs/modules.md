[shexj-traverser](README.md) / Exports

# shexj-traverser

## Table of contents

### Interfaces

- [Transformers](interfaces/transformers.md)

### Functions

- [traverseShex](modules.md#traverseshex)

## Functions

### traverseShex

▸ **traverseShex**<SchemaReturn, ShapeOrReturn, ShapeAndReturn, ShapeNotReturn, ShapeExternalReturn, NodeConstraintReturn, ObjectLiteralReturn, IriStemReturn, IriStemRangeReturn, LiteralStemReturn, LiteralStemRangeReturn, LanguageReturn, LanguageStemReturn, LanguageStemRangeReturn, WildcardReturn, ShapeReturn, EachOfReturn, OneOfReturn, TripleConstraintReturn, SemActReturn, AnnotationReturn, shapeExprReturn, valueSetValueReturn, tripleExprReturn, Schema_startActsReturn, Schema_startReturn, Schema_shapesReturn, ShapeOr_shapeExprsReturn, ShapeAnd_shapeExprsReturn, ShapeNot_shapeExprReturn, NodeConstraint_valuesReturn, IriStemRange_exclusionsReturn, LiteralStemRange_exclusionsReturn, LanguageStemRange_exclusionsReturn, Shape_expressionReturn, Shape_semActsReturn, Shape_AnnotationsReturn, EachOf_expressionsReturn, EachOf_semActsReturn, EachOf_AnnotationsReturn, OneOf_expressionsReturn, OneOf_semActsReturn, OneOf_AnnotationsReturn, TripleConstraint_valueExprReturn, TripleConstraint_semActsReturn, TripleConstraint_AnnotationsReturn\>(`shexSchema`: Schema, `transformers`: *Partial*<[*Transformers*](interfaces/transformers.md)<SchemaReturn, ShapeOrReturn, ShapeAndReturn, ShapeNotReturn, ShapeExternalReturn, NodeConstraintReturn, ObjectLiteralReturn, IriStemReturn, IriStemRangeReturn, LiteralStemReturn, LiteralStemRangeReturn, LanguageReturn, LanguageStemReturn, LanguageStemRangeReturn, WildcardReturn, ShapeReturn, EachOfReturn, OneOfReturn, TripleConstraintReturn, SemActReturn, AnnotationReturn, shapeExprReturn, valueSetValueReturn, tripleExprReturn, Schema\_startActsReturn, Schema\_startReturn, Schema\_shapesReturn, ShapeOr\_shapeExprsReturn, ShapeAnd\_shapeExprsReturn, ShapeNot\_shapeExprReturn, NodeConstraint\_valuesReturn, IriStemRange\_exclusionsReturn, LiteralStemRange\_exclusionsReturn, LanguageStemRange\_exclusionsReturn, Shape\_expressionReturn, Shape\_semActsReturn, Shape\_AnnotationsReturn, EachOf\_expressionsReturn, EachOf\_semActsReturn, EachOf\_AnnotationsReturn, OneOf\_expressionsReturn, OneOf\_semActsReturn, OneOf\_AnnotationsReturn, TripleConstraint\_valueExprReturn, TripleConstraint\_semActsReturn, TripleConstraint\_AnnotationsReturn\>\>): *Promise*<SchemaReturn\>

#### Type parameters

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
| `shapeExprReturn` | *string* \| ShapeOrReturn \| ShapeAndReturn \| ShapeNotReturn \| ShapeExternalReturn \| NodeConstraintReturn \| ShapeReturn |
| `valueSetValueReturn` | *string* \| ObjectLiteralReturn \| IriStemReturn \| IriStemRangeReturn \| LiteralStemReturn \| LiteralStemRangeReturn \| LanguageReturn \| LanguageStemReturn \| LanguageStemRangeReturn |
| `tripleExprReturn` | *string* \| EachOfReturn \| OneOfReturn \| TripleConstraintReturn |
| `Schema_startActsReturn` | SemActReturn[] |
| `Schema_startReturn` | shapeExprReturn |
| `Schema_shapesReturn` | shapeExprReturn[] |
| `ShapeOr_shapeExprsReturn` | shapeExprReturn[] |
| `ShapeAnd_shapeExprsReturn` | shapeExprReturn[] |
| `ShapeNot_shapeExprReturn` | shapeExprReturn |
| `NodeConstraint_valuesReturn` | valueSetValueReturn[] |
| `IriStemRange_exclusionsReturn` | (*string* \| IriStemReturn)[] |
| `LiteralStemRange_exclusionsReturn` | (*string* \| LiteralStemReturn)[] |
| `LanguageStemRange_exclusionsReturn` | (*string* \| LanguageStemReturn)[] |
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `shexSchema` | Schema |
| `transformers` | *Partial*<[*Transformers*](interfaces/transformers.md)<SchemaReturn, ShapeOrReturn, ShapeAndReturn, ShapeNotReturn, ShapeExternalReturn, NodeConstraintReturn, ObjectLiteralReturn, IriStemReturn, IriStemRangeReturn, LiteralStemReturn, LiteralStemRangeReturn, LanguageReturn, LanguageStemReturn, LanguageStemRangeReturn, WildcardReturn, ShapeReturn, EachOfReturn, OneOfReturn, TripleConstraintReturn, SemActReturn, AnnotationReturn, shapeExprReturn, valueSetValueReturn, tripleExprReturn, Schema\_startActsReturn, Schema\_startReturn, Schema\_shapesReturn, ShapeOr\_shapeExprsReturn, ShapeAnd\_shapeExprsReturn, ShapeNot\_shapeExprReturn, NodeConstraint\_valuesReturn, IriStemRange\_exclusionsReturn, LiteralStemRange\_exclusionsReturn, LanguageStemRange\_exclusionsReturn, Shape\_expressionReturn, Shape\_semActsReturn, Shape\_AnnotationsReturn, EachOf\_expressionsReturn, EachOf\_semActsReturn, EachOf\_AnnotationsReturn, OneOf\_expressionsReturn, OneOf\_semActsReturn, OneOf\_AnnotationsReturn, TripleConstraint\_valueExprReturn, TripleConstraint\_semActsReturn, TripleConstraint\_AnnotationsReturn\>\> |

**Returns:** *Promise*<SchemaReturn\>

Defined in: [traverseShex.ts:33](https://github.com/o-development/shexj-traverser/blob/9d521f3/lib/traverseShex.ts#L33)
