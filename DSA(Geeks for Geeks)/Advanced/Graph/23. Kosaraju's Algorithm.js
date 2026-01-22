class Graph {
  constructor(V) {
    this.V = V;
    this.adj = [];
    for (let i = 0; i < V; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  fillOrder(v, visited, s) {
    visited[v] = true;
    
    for(let i=0;i<this.adj.length;i++)
    {
        let x=this.adj[v][i];
        if(visited[x]===false)
        {
            this.fillOrder(x,visited,s);
        }
    }
    s.push(v);
  }

  DFSUtil(v, visited) {
    visited[v] = true;
    console.log(v);
    
    for(let i=0;i<this.adj[v].length;i++)
    {
        let x=this.adj[v][i];
        
        if(visited[x]===false)
        {
            this.DFSUtil(x,visited);
        }
    }
  }

  getTranspose() {
    let g = new Graph(this.V);

    for(let v=0;v<this.V;v++)
    {
        for(let i=0;i<this.adj[v].length;i++)
        {
            let x=this.adj[v][i];
            
            g.adj[x].push(v);
        }
    }
    return g;
  }

  printSCCs() {
    let s = [];
    let visited = [];
    for (let i = 0; i < this.V; i++) {
      visited[i] = false;
    }
    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.fillOrder(i, visited, s);
      }
    }
    let gr = this.getTranspose();
    for (let i = 0; i < this.V; i++) {
      visited[i] = false;
    }
    while (s.length > 0) {
      let v = s.pop();
      if (!visited[v]) {
        gr.DFSUtil(v, visited);
        console.log("");
      }
    }
  }
}

let g = new Graph(5);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(3, 4);

console.log("Following are strongly connected components in given graph");
g.printSCCs();
