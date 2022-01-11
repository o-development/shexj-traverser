/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Transformer,
  TransformerInputReturnTypes,
  TraverserDefinition,
  TraverserTypes,
  Visitor,
  VisitorsInput,
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
    ReturnTypes extends TransformerInputReturnTypes<Types>,
    Context = undefined
  >(transformers: TransformersInput<Types, ReturnTypes, Context>) {
    return new Transformer<Types, ReturnTypes, Context>(
      this.traverserDefinition,
      transformers
    );
  }

  public createVisitor<Context = undefined>(
    visitors: VisitorsInput<Types, Context>
  ) {
    return new Visitor<Types, Context>(this.traverserDefinition, visitors);
  }
}
