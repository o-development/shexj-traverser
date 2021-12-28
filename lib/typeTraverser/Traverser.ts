/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Transformer,
  TransformerInputReturnTypes,
  TraverserDefinition,
  TraverserTypes,
} from ".";
import { TransformersInput } from "./Transformers";

export class Traverser<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Types extends TraverserTypes<any>
> {
  private traverserDefinition: TraverserDefinition<Types>;

  constructor(traverserDefinition: TraverserDefinition<Types>) {
    this.traverserDefinition = traverserDefinition;
  }

  public createTransformer<
    ReturnTypes extends TransformerInputReturnTypes<Types>
  >(transformers: TransformersInput<Types, ReturnTypes>) {
    return new Transformer<Types, ReturnTypes>(
      this.traverserDefinition,
      transformers
    );
  }
}
