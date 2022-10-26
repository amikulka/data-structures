class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length++] = value;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }
    this.length--;
    let result = this[this.length];
    delete this[this.length];
    return result;
  }

  size() {
    return this.length;
  }

}