/* 
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a, b){
    if(b === 0){
        return 1;
    }
    let total = a;
    for(let i = 1; i < b; i++) {
        total *= a;
    }
    return total;
    
}

let p = power (2, 2);
console.log(p);