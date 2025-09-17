// Depth First Search

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

    DFSRec(s, visited) {
        visited[s] = true;
        console.log(s);
        let adj = this.adj;
        
        for(let i = 0; i < adj[s].length; i++) {
            let u = adj[s][i];
            if(visited[u] === false) {
                this.DFSRec(u, visited);
            }
        }
    }

    DFS(s) {
        let v = this.adj.length;
        let visited = new Array(v).fill(false);
        this.DFSRec(s, visited);
    }

}

let obj = new Graph(4);
obj.addEdge(0, 1);
obj.addEdge(0, 2);
obj.addEdge(1, 2);
obj.addEdge(1, 3);

// obj.printGraph();
obj.DFS(0);