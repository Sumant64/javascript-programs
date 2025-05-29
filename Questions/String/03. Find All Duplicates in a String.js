// Find All Duplicates in a String

const duplicates = (str) => {
    let obj = {};
    let arr = []

    for(let i = 0; i < str.length; i++) {
        obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
        if(obj[str[i]] > 1) {
            arr.push(str[i]);
        }
    }

    return arr;
}

console.log(duplicates("programming"))