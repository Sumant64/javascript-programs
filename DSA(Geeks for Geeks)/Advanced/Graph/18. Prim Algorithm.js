const V = 4;

function primMST(graph) {
    let key = new Array(V).fill(Number.MAX_SAFE_INTEGER);
    let mSet = new Array(V).fill(false);

    key[0] = 0;
    let res = 0;

    for(let count = 0; count < V; count++) {
        let u = -1;

        // take the minimum weight vertex
        for(let i = 0; i < V; i++) {
            if(mSet[i] === false && (u === -1 || key[i] < key[u])) {
                u = i;
            }
        }

        mSet[u] = true;
        res += key[u];

        // set the key array distance adjacent to u (update the key array with adjacent dist to u)
        for(let v = 0; v < V; v++) {
            if(mSet[v] === false && graph[u][v] !== 0 && graph[u][v] < key[v]) {
                key[v] = graph[u][v];
            }
        }

    }

    return res;
}

const graph = [
    [0, 5, 8, 0],
    [5, 0, 10, 15],
    [8, 10, 0, 20],
    [0, 15, 20, 0]
]

console.log(primMST(graph));