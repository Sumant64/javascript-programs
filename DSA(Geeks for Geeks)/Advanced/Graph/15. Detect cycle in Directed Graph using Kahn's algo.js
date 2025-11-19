// Detect Cycle in the Directed Graph using Kahn's Algorithm:

class Graph {
    constructor(V) {
        this.adj = [];
        for (let i = 0; i < V; i++)
            this.adj[i] = [];
    }

    addEdge(u, v) {
        this.adj[u].push(v)
    }

    printGraph() {
        let adj = this.adj;
        for (let i = 0; i < adj.length; i++)
            console.log(adj[i]);
    }

    topologicalSort(V) {
        let adj = this.adj;
        let in_degree = new Array(V).fill(0);

        let count = 0;

        for (let u = 0; u < V; u++) {
            for (let i = 0; i < adj[u].length; i++) {
                let x = adj[u][i];

                in_degree[x]++;
            }
        }

        let q = [];

        for (let u = 0; u < V; u++) {
            if (in_degree[u] === 0) {
                q.push(u);
            }
        }

        while (q.length > 0) {
            let u = q.shift();

            for (let i = 0; i < adj[u].length; i++) {
                let x = adj[u][i];

                in_degree[x]--;

                if (in_degree[x] === 0) {
                    q.push(x);
                }
            }

            count++;
        }

        if (count !== V) {
            console.log("There exists a cycle in the graph");
        }
        else {
            console.log("There exists no cycle in the graph");
        }

    }
}


const V=5;
const adj = new Graph(V);
adj.addEdge(0,1);
adj.addEdge(4,1);
adj.addEdge(1,2);
adj.addEdge(2,3);
adj.addEdge(3,1);

adj.topologicalSort(V);