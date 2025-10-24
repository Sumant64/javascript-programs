// Balanced Parantheses....

function matching(a, b) {
    return ((a === '(' && b === ')') || 
            (a === '{' && b === '}') ||
             a === '[' && b === ']');
}

function isBalanced(str) {
    let s = [];

    for(let i = 0; i < str.length; i++) {
        let x = str[i];
        if(x === '(' || x === '[' || x === '{') {
            s.push(x);
        } else { // closing brackets
            if(s.length === 0) {
                return false;
            } else if(!matching(s[s.length - 1], x)) {
                return false;
            } else {
                s.pop();
            }
        }
    }

    return (s.length === 0);
}


console.log(isBalanced('(){()}((()))'))