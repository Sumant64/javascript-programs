// DFS for Disconnected Graph

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

    DFSRec(s, parent, visited) {
        visited[s] = true;
        let adj = this.adj;
        
        for(let i = 0; i < adj[s].length; i++) {
            let u = adj[s][i];
            if(visited[u] === false) {
                if(this.DFSRec(u, s, visited)) {
                    return true;
                }
            } else if(u !== parent) {
                return true;
            }
        }

        return false;
    }

    isCycle() {
        let v = this.adj.length;
        let visited = new Array(v).fill(false);
        for(let i = 0; i < v; i++) {
            if(!visited[i]) {
                if(this.DFSRec(i, -1, visited)) {
                    return true;
                }
            }
        }

        return false;
    }
}

let obj = new Graph(4);
obj.addEdge(0, 1);
obj.addEdge(0, 2);
// obj.addEdge(1, 2);


// obj.printGraph();
console.log(obj.isCycle());