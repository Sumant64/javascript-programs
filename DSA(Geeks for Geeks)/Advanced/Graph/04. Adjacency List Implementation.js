// Adjancency List Implementation

class Graph {
    constructor(v) {
        this.adj = [];
        for(let i = 0; i < v; i++) {
            this.adj[i] = []
        }
    }


    addEdge(u, v) {
        this.adj[u].push(v);
        this.adj[v].push(u);
    }

    printGraph() {
        let adj = this.adj;
        for(let i = 0; i < adj.length; i++) {
            console.log(adj[i]);
        }
    }
}


let obj = new Graph(4);
obj.addEdge(0, 1);
obj.addEdge(0, 2);
obj.addEdge(1, 2);
obj.addEdge(1, 3);

obj.printGraph();