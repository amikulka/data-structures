

// // Instantiate a new graph
// var Graph = function() {
//   this.nodes = [];
// };



// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   let newNode = {
//     'value': node,
//     'edges': []
//   };
//   this.nodes.push(newNode);
// };



// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//   for (let i = 0; i < this.nodes.length; i++) {
//     if (this.nodes[i].value === node) {
//       return true;
//     }
//   }
//   return false;
// };



// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
//   let nodeToRemoveIndex;

//   this.nodes.forEach(function (el, i) {
//     if (el.value === node) {
//       nodeToRemoveIndex = i;
//     }
//   });

//   let edgesToRemove = this.nodes[nodeToRemoveIndex].edges.map(function (el) {
//     return el.value;
//   });

//   let innerRemoveEdge = this.removeEdge.bind(this);
//   edgesToRemove.forEach(function(edge) {
//     innerRemoveEdge(node, edge);
//   });
//   // other way without bind
//   // for (let i = 0; i < edgesToRemove.length; i++) {
//   //   this.removeEdge(edgesToRemove[i], node);
//   // }

//   this.nodes.splice(nodeToRemoveIndex, 1);
// };



// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {
//   for (let i = 0; i < this.nodes.length; i++) {
//     let currentNode = this.nodes[i];
//     if (fromNode === currentNode.value) {
//       for (let j = 0; j < currentNode.edges.length; j++) {
//         let currentEdge = currentNode.edges[j];
//         if (toNode === currentEdge.value) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };



// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {
//   let toNode, fromNode;

//   for (let i = 0; i < this.nodes.length; i++) {
//     if (fromNodeValue === this.nodes[i].value) {
//       fromNode = this.nodes[i];
//     }
//     if (this.nodes[i].value === toNodeValue) {
//       toNode = this.nodes[i];
//     }
//     if (toNode && fromNode) {
//       break;
//     }
//   }

//   fromNode.edges.push(toNode);
//   toNode.edges.push(fromNode);
// };



// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {

//   for (let nodesIndex = 0; nodesIndex < this.nodes.length; nodesIndex++) {
//     let currentNode = this.nodes[nodesIndex];
//     if (currentNode.value === fromNode) {
//       for (let edgesIndex = 0; edgesIndex < currentNode.edges.length; edgesIndex++) {
//         if (currentNode.edges[edgesIndex].value === toNode) {
//           currentNode.edges.splice(edgesIndex, 1);
//           break;
//         }
//       }
//     }
//     if (currentNode.value === toNode) {
//       for (let edgesIndex = 0; edgesIndex < currentNode.edges.length; edgesIndex++) {
//         if (currentNode.edges[edgesIndex].value === fromNode) {
//           currentNode.edges.splice(edgesIndex, 1);
//           break;
//         }
//       }
//     }
//   }

// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
//   for (let i = 0; i < this.nodes.length; i++) {
//     cb.call(this, this.nodes[i].value);
//   }
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
// addnode O(1)
// contains O(n)
// removenode O(n2)
// has edge O(n)
// add edge O(n)
// remove edge O(n)
// foreach O(n)
//  */


// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // let edges = Object.keys(this.nodes[node]);
  for (let currentNode in this.nodes[node]) {
    this.removeEdge(currentNode, node);
  }
  delete this.nodes[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode][toNode] !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = this.nodes[toNode];
  this.nodes[toNode][fromNode] = this.nodes[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let currentNode in this.nodes) {
    cb.call(this, currentNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */