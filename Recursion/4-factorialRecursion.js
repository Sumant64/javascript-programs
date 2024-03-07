// factorial of a num using recursion

function factorial (num){
    if(num === 1){
        return 1;
    }
    return num * factorial(num-1);
}

let fact = factorial(5);
console.log(fact);