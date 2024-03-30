//graph implementation using Adjancency List

class Graph {
    constructor() {
        this.adjancecyList = {};
    }

    addVertex(vertex) {
        if(!this.adjancecyList[vertex]) this.adjancecyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjancecyList[v1].push(v2);
        this.adjancecyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjancecyList[vertex1] = this.adjancecyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjancecyList[vertex2] = this.adjancecyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        while(this.adjancecyList[vertex].length) {
            const adjacentVertex = this.adjancecyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjancecyList[vertex];
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
console.log(g);
console.log('========================================');
g.removeEdge("Hong Kong", "Tokyo");
console.log(g);

