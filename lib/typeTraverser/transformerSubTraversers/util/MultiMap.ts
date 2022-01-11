export class MultiMap<Key1, Key2, Value> {
  private map: Map<Key1, Map<Key2, Value>> = new Map();
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private internalSize: number = 0;

  get(key1: Key1, key2: Key2): Value | undefined {
    const firstValue = this.map.get(key1);
    if (!firstValue) {
      return undefined;
    }
    return firstValue.get(key2);
  }
  set(key1: Key1, key2: Key2, value: Value): void {
    let nestedMap = this.map.get(key1);
    if (!nestedMap) {
      nestedMap = new Map();
      this.map.set(key1, nestedMap);
    }
    if (!nestedMap.has(key2)) {
      this.internalSize++;
    }
    nestedMap.set(key2, value);
  }
  delete(key1: Key1, key2: Key2): void {
    const nestedMap = this.map.get(key1);
    if (!nestedMap) {
      return;
    }
    if (nestedMap.has(key2)) {
      this.internalSize--;
    }
    nestedMap.delete(key2);
    if (nestedMap.size === 0) {
      this.map.delete(key1);
    }
  }
  has(key1: Key1, key2: Key2): boolean {
    const firstValue = this.map.get(key1);
    if (!firstValue) {
      return false;
    }
    return firstValue.has(key2);
  }
  log(): void {
    console.log(this.map);
  }
  get size() {
    return this.internalSize;
  }
}
