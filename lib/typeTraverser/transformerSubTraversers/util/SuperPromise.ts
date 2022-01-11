import { v4 } from "uuid";

export class SuperPromise {
  private unfulfilled: Set<string> = new Set();
  private waitResolve: (() => void) | undefined = undefined;

  add(): () => void {
    const id = v4();
    this.unfulfilled.add(id);
    return () => {
      this.unfulfilled.delete(id);
      if (this.unfulfilled.size === 0 && this.waitResolve) {
        this.waitResolve();
      }
    };
  }

  async wait(): Promise<void> {
    if (this.unfulfilled.size === 0) {
      return;
    }
    return new Promise<void>((resolve) => {
      this.waitResolve = resolve;
    });
  }
}
