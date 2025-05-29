// Factorial with memoization

let map = {}

const factRec = (num) => {
    if(num === 1) return 1;
    if(map[num]) {
        console.log(map)
        return map[num]
    };
    let res = num * factRec(num - 1)
    map[num] = res;
    return res;
}

const mapFactRec = (num) => {
    let res = factRec(num);
    return res;
}


console.log(mapFactRec(5));
console.log(mapFactRec(7));
console.log(mapFactRec(5));