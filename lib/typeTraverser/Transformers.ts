/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApplyTransformerReturnTypesDefaults,
  TransformerReturnTypes,
  TraverserTypes,
} from ".";

export type Transformers<
  Types extends TraverserTypes<any>,
  InputReturnTypes extends Partial<TransformerReturnTypes<Types>>,
  ReturnTypes extends TransformerReturnTypes<Types> = ApplyTransformerReturnTypesDefaults<
    Types,
    InputReturnTypes
  >
> = {
  [TypeName in keyof ReturnTypes]: (
    originalData: Types[TypeName]["type"],
    childData: ReturnTypes
  ) => Promise<ReturnTypes[TypeName]["return"]>;
};
