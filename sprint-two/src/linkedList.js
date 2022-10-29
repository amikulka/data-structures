var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    let newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };


  list.removeHead = function() {
    let result = list.head.value;
    list.head = list.head.next;
    return result;
  };


  list.contains = function(target) {
    let currentNode = list.head;

    let doesMatchTarget = function (target, currentNode) {
      if ( target === currentNode.value) {
        return true;
      } else if (currentNode.next) {
        return doesMatchTarget(target, currentNode.next);
      } else {
        return false;
      }
    };

    return doesMatchTarget(target, currentNode);
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
add to Tail O(1)
remove head O(1)
contains O(n)
 */
