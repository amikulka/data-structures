

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //withing the limited array [storage]
  //within the bucket
  //iterate the tuples
  //if the key is not found
  //create the key value pair
  // let bucket = this._storage.get(index);
  // bucket = bucket || [];
  if (!this._storage.get(index)) {
    this._storage.set(index, [[key, value]]);
  } else {
    let isFound = false;
    for (let i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === key) {
        this._storage.get(index)[i][1] = value;
        isFound = true;
      }
    }
    if (!isFound) {
      this._storage.get(index).push([key, value]);
    }
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (!this._storage.get(index)) {
    return undefined;
  } else {
    let result;
    this._storage.get(index).forEach(function (tuple) {
      if (tuple[0] === key) {
        result = tuple[1];
      }
    });
    return result;
  }

};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index)) {
    let tupleIndex;
    this._storage.get(index).forEach(function (tuple, currentIndex) {
      if (tuple[0] === key) {
        tupleIndex = currentIndex;
      }
    });
    this._storage.get(index).splice(tupleIndex, 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert O(1)
retieve O(1)
remove O(1)
 */


