// Topological Sorting (DFS Based Algorithm)

class Graph {
  constructor(V) {
    this.adj = [];
    for (let i=0; i<V; i++)
      this.adj[i] = [];
  }
  
  addEdge(u, v) {
    this.adj[u].push(v)
  }
  
  DFS(u,st,visited)
  {
      visited[u]=true;
      
      let adj=this.adj;
      for(let i=0;i<adj[u].length;i++)
      {
          let v=adj[u][i];
          
          if(visited[v]===false)
          {
              this.DFS(v,st,visited);
          }
      }
      st.push(u);
  }
  
  topologicalSort(V)
  {
      let visited=new Array(V).fill(false);
      
      let st= [];
      
      for(let u=0;u<V;u++)
      {
          if(visited[u]===false)
          {
              this.DFS(u,st,visited);
          }
      }
      
      while(st.length > 0)
      {
          let u=st.pop();
          console.log(u);
      }
  }
}

const V=5;
const adj=new Graph(V);

adj.addEdge(0,1);
adj.addEdge(1,3);
adj.addEdge(2,3);
adj.addEdge(3,4);
adj.addEdge(2,4);

console.log("Following is the topological sort of");
adj.topologicalSort(V);
