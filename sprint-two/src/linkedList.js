var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //add a node of a specific value to the tail position
    let newNode = Node(value);
    //add a pointer from the previous tail pointing @ the new tail (in the Next property)

//***********************

    //initialize run head must change from null to new node
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    //change list.tail to point to the new tail

  };

  list.removeHead = function() {

  };

  list.contains = function(target) {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
