export default function transformerFactoryFactory(traversersConfig: any): any {
  const traversers: any = {};
  Object.entries(traversersConfig).forEach(
    ([traverserKey, traverserConfig]: [string, any]) => {
      switch (traverserConfig.type) {
        case "interface":
          traversers[traverserKey] = async (
            originalData: any,
            transformersConfig: any
          ): Promise<any> => {
            const transformedChildren: any = {};
            await Promise.all(
              Object.entries(traverserConfig.properties).map(
                async ([propertyKey, propertyConfig]: [string, any]) => {
                  if (originalData[propertyKey]) {
                    let traversed: any;
                    if (Array.isArray(originalData[propertyKey]) ) {
                      traversed = await Promise.all(
                        originalData[propertyKey].map(async (curData: any) => {
                          return await traversers[propertyConfig](
                            curData,
                            transformersConfig
                          );
                        })
                      );
                    } else {
                      traversed = await traversers[propertyConfig](
                        originalData[propertyKey],
                        transformersConfig
                      );
                    }
                    transformedChildren[propertyKey] = await transformersConfig[
                      traverserKey
                    ].properties[propertyKey](originalData[propertyKey], traversed);
                  }
                }
              )
            );
            const transformed = await transformersConfig[traverserKey].transformer(
              originalData,
              transformedChildren
            );
            return transformed;
          };
          break;
        case "union":
          traversers[traverserKey] = async (
            originalData: any,
            transformersConfig: any
          ): Promise<any> => {
            const specificTypeTraverserKey = await traverserConfig.detectType(
              originalData
            );
            const transformedChild = await traversers[specificTypeTraverserKey](
              originalData,
              transformersConfig
            );
            return await transformersConfig[traverserKey].transformer(
              originalData,
              transformedChild
            );
          };
          break;
        default:
          throw new Error(
            `${traverserConfig.type} is not a valid transformer config type`
          );
      }
    }
  );
  return (transformersConfig: any): any => {
    return (dataToTraverse: any, traverserKey: string): any => {
      return traversers[traverserKey](dataToTraverse, transformersConfig);
    };
  };
}
