class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.start = 0;
    this.end = 0;
    this.length = 0;
  }

  enqueue (value) {
    this[this.end++] = value;
    this.length++;
  }

  dequeue() {
    if (!this.length) {
      return undefined;
    }
    let result = this[this.start];
    delete this[this.start++];
    this.length--;
    return result;
  }

  size () {
    return this.length;
  }

}
