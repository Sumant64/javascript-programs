// String Compression

/**
 * "aabcccccaaa")); // "a2b1c5a3"
 */

const stringComp = (str) => {
    let res = "";
    let i = 0;
    
    while(i < str.length) {
        let freq = 1;
        let j = i + 1;
        while(j < str.length) {
            if(str[j] === str[i]) {
                freq++;
            } else {
                break;
            }
            j++;
        }

        res += `${str[i]}${freq}`
        i = j;

    }

    return res;
}

console.log(stringComp('aabcccccaaa'))