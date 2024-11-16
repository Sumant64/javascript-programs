// factorial of a num iteratively

function factorial (num) {
    let total = 1;
    for(let i = num; i > 0; i--){
        total *= i;
    }
    return total;
}

let fact = factorial(5);
console.log(fact);