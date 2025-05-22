// sum of a range

function sumRange (num) {
    if(num === 1){
        return 1;
    }
    return num + sumRange(num - 1);
}

let sum = sumRange(4);
console.log(sum);