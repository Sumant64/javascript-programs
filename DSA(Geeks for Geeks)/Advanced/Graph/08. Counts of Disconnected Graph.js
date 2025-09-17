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

    DFSDisconnectedRec(s, visited) {
        visited[s] = true;
        // console.log(s);
        let adj = this.adj;
        
        for(let i = 0; i < adj[s].length; i++) {
            let u = adj[s][i];
            if(visited[u] === false) {
                this.DFSDisconnectedRec(u, visited);
            }
        }
    }

    DFSDisconnected() {
        let v = this.adj.length;
        let count = 0;
        let visited = new Array(v).fill(false);
        for(let i = 0; i < v; i++) {
            if(!visited[i]) {
                this.DFSDisconnectedRec(i, visited);
                count++;
            }
        }
        return count;
    }

}

let obj = new Graph(7);
obj.addEdge(0, 1);
obj.addEdge(0, 2);
obj.addEdge(1, 2);
obj.addEdge(3, 4);
obj.addEdge(4, 5);

// obj.printGraph();
let count = obj.DFSDisconnected();
console.log(count);