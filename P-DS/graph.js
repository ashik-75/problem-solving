class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return null;
    }

    for (let adjacency of this.adjacencyList[vertex]) {
      this.removeEdges(vertex, adjacency);
    }

    delete this.adjacencyList[vertex];
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdges(vertex1, vertex2) {
    this.adjacencyList[vertex1]?.delete(vertex2);
    this.adjacencyList[vertex2]?.delete(vertex1);
  }

  display() {
    for (let vertex in (this, this.adjacencyList)) {
      console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`);
    }
  }

  hasEdges(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
}

const graph = new Graph();

// add vertex
graph.addVertex("A");
graph.addVertex("B");

// add edges
graph.addEdges("A", "B");
graph.addEdges("D", "B");

// has vertex
console.log(graph.hasEdges("A", "B"));

// delete edges
graph.removeEdges("A", "B]");

// remove edges
graph.removeVertex("A");

graph.display();
