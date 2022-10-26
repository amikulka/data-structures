var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newQueue = {};
  newQueue.start = 0;
  newQueue.end = 0;
  newQueue.length = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.end++] = value;
  this.length++;
};

queueMethods.dequeue = function () {
  if (!this.length) {
    return undefined;
  }
  result = this[this.start];
  delete this[this.start++];
  this.length--;
  return result;
};

queueMethods.size = function () {
  return this.length;
};


