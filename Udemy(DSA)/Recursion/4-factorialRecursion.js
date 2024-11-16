// factorial of a num using recursion

function factorial (num){
    if(num === 0) {
        return 1;
    }
    if(num === 1){
        return 1;
    }
    return num * factorial(num-1);
}

let fact = factorial(0);
console.log(fact);