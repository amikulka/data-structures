var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let start = 0;
  let end = 0;
  size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end++] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (!size) {
      return undefined;
    }
    let result = storage[start];
    delete storage[start++];
    size--;
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
