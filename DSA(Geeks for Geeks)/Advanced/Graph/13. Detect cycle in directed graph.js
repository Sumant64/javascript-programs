// Detect cycle in directed graph using DFS


class Graph {
    constructor(v) {
        this.adj = [];
        for(let i = 0; i < v; i++) {
            this.adj[i] = []
        }
    }


    addEdge(u, v) {
        this.adj[u].push(v);
        // this.adj[v].push(u);
    }

    printGraph() {
        let adj = this.adj;
        for(let i = 0; i < adj.length; i++) {
            console.log(adj[i]);
        }
    }

    DFSRec(s, visited, aSet) {
        visited[s] = true;
        aSet[s] = true;
        let adj = this.adj;
        
        for(let i = 0; i < adj[s].length; i++) {
            let u = adj[s][i];
            if(visited[u] === false) {
                if(this.DFSRec(u, visited, aSet)) {
                    return true;
                }
            } else if(aSet[u]) {
                return true;
            }
        }
        aSet[s] = false;

        return false;
    }

    isCycleDir() {
        let v = this.adj.length;
        let visited = new Array(v).fill(false);
        let aSet = new Array(v).fill(false);

        for(let i = 0; i < v; i++) {
            if(!visited[i]) {
                if(this.DFSRec(i, visited, aSet)) {
                    return true;
                }
            }
        }

        return false;
    }
}

let obj = new Graph(4);
obj.addEdge(0, 1);
obj.addEdge(1, 2);
// obj.addEdge(2, 3);
// obj.addEdge(3, 1);


// obj.printGraph();
console.log(obj.isCycleDir());