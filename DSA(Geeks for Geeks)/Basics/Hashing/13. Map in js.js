// Map in Javascript

/**
 * O Map in JavaScript
 * --> Collection of key-value Pairs
 * --> Can be traversed according to insertion order.
 * --> All keys must be distinct.
 * --> Values may be repeated 
 * --> Uses hash Table internally.
 * 
 */

// let m = new Map([
//     [101, "xyz"],
//     [201, "abc"],
//     [301, "xyz"]
// ]);

// console.log(m);

// ======================================
// has and get function

let m = new Map();
m.set(101, "Sandeep");
m.set(103, "Ravi");
m.set(104, "Rahul");

// console.log(m.has(103)); //true
// console.log(m.has("Ravi")); // false : it takes only keys
// console.log(m.size); // 3
// console.log(m.get(104)); // Rahul

// m.set(104, "Harsh");
// console.log(m.get(104)); // Harsh
// console.log(m.size); // 3

// ===============================
// delete function
// m.delete(103);
// console.log(m.get(103)); // undefined
// console.log(m.size);

// m.clear();
// console.log(m.size);

// ===========================
// iteration

for(let x of m.entries()) {
    console.log(x);
}

for(let x of m.keys()) {
    console.log(x);
}

for(let x of m.values()) {
    console.log(x);
}