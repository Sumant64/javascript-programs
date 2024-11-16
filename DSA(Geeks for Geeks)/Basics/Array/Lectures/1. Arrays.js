// Arrays in javascript

// let arr = [10, 20, 35, 45];
// console.log(arr[0]);    // 10
// console.log(arr[1]);    // 20
// console.log(arr.length);    // 4 --> tells the no of elements in the array
// console.log(arr[arr.length - 1]); // 45 --> access the last element of the array
// console.log(arr); // [10, 20, 35, 45]

// ========================================
let arr1 = [10, 20];
arr1.push(40); 
arr1.push(50);
console.log(arr1); // [10, 20, 40, 50]

arr1.unshift(5); // add the element at the beginning
console.log(arr1); // [5, 10, 20, 40, 50]

arr1[1] = 30;
console.log(arr1); // [5, 30, 20, 40, 50]
arr1[6] = 100; // [5, 30, 20, 40, 50, 100] --> add extra element at the end 
arr1[10] = 150; // [ 5, 30, 20, 40, 50, <1 empty item>, 100, <3 empty items>, 150 ] --> it will store empty items
console.log(arr1)