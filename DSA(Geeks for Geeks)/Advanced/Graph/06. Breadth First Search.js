// Breadth first search

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

    BFS(s) {
        let adj = this.adj;
        let visited = new Array(adj.length).fill(false);
        let q = [];
        q.push(s)
        visited[s] = true;

        while(q.length > 0) {
            let u = q.shift();
            console.log(u);
            for(let i = 0; i < adj[u].length; i++) {
                let v = adj[u][i];
                if(!visited[v]) {
                    visited[v] = true;
                    q.push(v);
                }
            }
        }
    }
}


let obj = new Graph(4);
obj.addEdge(0, 1);
obj.addEdge(0, 2);
obj.addEdge(1, 2);
obj.addEdge(1, 3);

obj.printGraph();
obj.BFS(0);