var BinarySearchTree = function(value) {
  let obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function (value) {
  //vale is less than the current node value
  if (value < this.value) {
    //child node left is not null
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value) {
    if (this.left) {
      return this.left.contains(target);
    } else {
      return false;
    }
  } else {
    if (this.right) {
      return this.right.contains(target);
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function (callbackFunction) {
  callbackFunction(this.value);
  if (this.left) {
    this.left.depthFirstLog(callbackFunction);
  }
  if (this.right) {
    this.right.depthFirstLog(callbackFunction);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert - O(log)
contains - O(log)
depthFirstLog O(n)
 */
