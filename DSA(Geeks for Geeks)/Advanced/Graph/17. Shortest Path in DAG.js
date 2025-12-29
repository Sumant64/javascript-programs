// Shortest Path in DAG (Directed Acyclic Graph)


class AdjListNode {
    constructor(v, w) {
        this.v = v;
        this.weight = w;
    }

    getV() {
        return this.v;
    }

    getWeight() {
        return this.weight;
    }
}

class Graph {
    constructor(V) {
        this.V = V;
        this.adj = new Array(V);
        for (let i = 0; i < V; i++) {
            this.adj[i] = [];
        }
    }

    addEdge(u, v, weight) {
        this.adj[u].push(new AdjListNode(v, weight));
    }

    topologicalSortUtil(v, visited, Stack) {
        visited[v] = true;
        for (const node of this.adj[v]) {
            if (!visited[node.getV()]) {
                this.topologicalSortUtil(node.getV(), visited, Stack);
            }
        }
        Stack.push(v);
    }

    shortestPath(s) {
        const INF = Number.POSITIVE_INFINITY;
        const Stack = [];
        const dist = new Array(this.V).fill(INF);
        const visited = new Array(this.V).fill(false);
        for (let i = 0; i < this.V; i++) {
            if (!visited[i]) {
                this.topologicalSortUtil(i, visited, Stack);
            }
        }

        dist[s] = 0;

        while (Stack.length > 0) {
            const u = Stack.pop();
            if (dist[u] !== INF) {
                for (const node of this.adj[u]) {
                    if (dist[node.getV()] > dist[u] + node.getWeight()) {
                        dist[node.getV()] = dist[u] + node.getWeight();
                    }
                }
            }
        }

        for (let i = 0; i < this.V; i++) {
            if (dist[i] === INF) {
                console.log("INF");
            }
            else {
                console.log(dist[i]);
            }
        }

    }
}

const g = new Graph(6);
g.addEdge(0, 1, 2);
g.addEdge(0, 4, 1);
g.addEdge(1, 2, 3);
g.addEdge(4, 2, 2);
g.addEdge(4, 5, 4);
g.addEdge(2, 3, 6);
g.addEdge(5, 3, 1);

const s = 0;
console.log("Following are shortest distances from source", s);
g.shortestPath(s);
