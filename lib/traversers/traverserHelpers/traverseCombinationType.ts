// A traverser helper designed for base types

export default async function traverseCombinationType<Type>(
  fieldOptions: { [Property in keyof Type]: { traverser:  } }
) {
  let expressions: EachOf_expressionsReturn;
  let semActs: EachOf_semActsReturn | undefined;
  let annotations: EachOf_AnnotationsReturn | undefined;

  await Promise.all([
    (async () => {
      const transformed = await Promise.all(
        eachOf.expressions.map(async (curExpr, index) => {
          return await traverseTripleExpr(
            curExpr,
            transformers,
            parentStack.concat([
              {
                parent: eachOf,
                type: "EachOf",
                via: "expressions",
                viaIndex: index,
              },
            ])
          );
        })
      );
      expressions = await transformers.EachOf_expressions(
        eachOf.expressions,
        transformed,
        parentStack.concat([
          {
            parent: eachOf,
            type: "EachOf",
            via: "expressions",
          },
        ])
      );
    })(),
    (async () => {
      if (eachOf.semActs) {
        const transformed = await Promise.all(
          eachOf.semActs.map(async (curSemAct, index) => {
            return await traverseSemAct(
              curSemAct,
              transformers,
              parentStack.concat([
                {
                  parent: eachOf,
                  type: "EachOf",
                  via: "semActs",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        semActs = await transformers.EachOf_semActs(
          eachOf.semActs,
          transformed,
          parentStack.concat([
            {
              parent: eachOf,
              type: "EachOf",
              via: "semActs",
            },
          ])
        );
      }
    })(),
    (async () => {
      if (eachOf.annotations) {
        const transformed = await Promise.all(
          eachOf.annotations.map(async (curAnnotation, index) => {
            return await traverseAnnotation(
              curAnnotation,
              transformers,
              parentStack.concat([
                {
                  parent: eachOf,
                  type: "EachOf",
                  via: "annotations",
                  viaIndex: index,
                },
              ])
            );
          })
        );
        annotations = await transformers.EachOf_Annotations(
          eachOf.annotations,
          transformed,
          parentStack.concat([
            {
              parent: eachOf,
              type: "EachOf",
              via: "annotations",
            },
          ])
        );
      }
    })(),
  ]);

  return await transformers.EachOf(
    eachOf,
    {
      // expressions is defined in promise
      // @ts-ignore
      expressions,
      semActs,
      annotations,
    },
    parentStack
  );
}
