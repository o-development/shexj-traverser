import { MultiMap } from "./MultiMap";
import { MultiSet } from "./MultiSet";

export class CircularDepenedencyAwaiter {
  private graphNodes: MultiMap<object, string, MultiSet<object, string>> =
    new MultiMap();
  private waitResolve: (() => void) | undefined = undefined;
  private waitReject: ((err: Error) => void) | undefined = undefined;

  add(
    subjectItem: object,
    subjectItemName: string,
    awaitedItem: object,
    awaitedItemName: string
  ): () => void {
    if (!this.graphNodes.has(subjectItem, subjectItemName)) {
      this.graphNodes.set(subjectItem, subjectItemName, new MultiSet());
    }
    this.graphNodes
      .get(subjectItem, subjectItemName)
      ?.add(awaitedItem, awaitedItemName);
    this.checkForCircuit(
      awaitedItem,
      awaitedItemName,
      subjectItem,
      subjectItemName
    );
    return () => {
      const awaitedSet = this.graphNodes.get(subjectItem, subjectItemName);
      awaitedSet?.delete(awaitedItem, awaitedItemName);
      if (awaitedSet?.size === 0) {
        this.graphNodes.delete(subjectItem, subjectItemName);
      }
      if (this.graphNodes.size === 0 && this.waitResolve) {
        this.waitResolve();
      }
    };
  }

  checkForCircuit(
    curItem: object,
    curItemName: string,
    subjectItem: object,
    subjectItemName: string
  ): void {
    const nextNodes = this.graphNodes.get(curItem, curItemName);
    if (!nextNodes) {
      return;
    }
    nextNodes.forEach((nextItem, nextItemName) => {
      if (subjectItem === nextItem && subjectItemName === nextItemName) {
        const err = new Error(
          `Circular dependency found. Use the 'setReturnPointer' function.`
        );
        if (this.waitReject) {
          this.waitReject(err);
        }
        throw err;
      }
      this.checkForCircuit(
        nextItem,
        nextItemName,
        subjectItem,
        subjectItemName
      );
    });
  }

  async wait(): Promise<void> {
    if (this.graphNodes.size === 0) {
      return;
    }
    return new Promise<void>((resolve, reject) => {
      this.waitResolve = resolve;
      this.waitReject = reject;
    });
  }
}
