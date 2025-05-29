// Longest Word in Sentence

const longestWord = (word) => {
    let wordArr = word.split(" ");
    let res = wordArr[0];
    
    for(let i = 1; i < wordArr.length; i++) {
        if(wordArr[i].length > res.length) {
            res = wordArr[i];
        }
    }

    return res;
}

console.log(longestWord("The quick brown fox jumps")); // "jumps"