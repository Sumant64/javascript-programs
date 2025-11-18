// Topological Sort

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

            console.log(u);

            for (let i = 0; i < adj[u].length; i++) {
                let x = adj[u][i];

                in_degree[x]--;

                if (in_degree[x] === 0) {
                    q.push(x);
                }
            }
        }

    }
}

const V = 5;
const adj = new Graph(V);
adj.addEdge(0, 2);
adj.addEdge(0, 3);
adj.addEdge(1, 3);
adj.addEdge(1, 4);
adj.addEdge(2, 3);

console.log("Following is a Topoological Sort of:");

adj.topologicalSort(V);