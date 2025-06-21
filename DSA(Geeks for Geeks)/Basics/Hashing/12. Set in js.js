// Set in Javascript

/**
 * o Distinct Elements
 * o Elements are traversal in insertion Order.
 * In Javascript Set elements are arranged in insertion order, but
 * in other languages no order is maintained like Java, C++.
 * o No Indexing (or Random Access)
 * o Insertion, Search, Delete, Union, Intersection and Set Difference
 * are faster.
 * o Uses hashing internally.
 */
// =====================================================

let s1 = new Set();
s1.add(10);
s1.add(20);
s1.add(20); // it will not add duplicate items
console.log(s1); // { 10, 20 }

let s2 = new Set([100, 500, 200]);
console.log(s2); // { 100, 500, 200 }
console.log(s2.size); // 3
console.log("==================================");

// ======================================

let s3 = new Set([10, 50, 20, 30]);
console.log(s3.has(20)); // true
console.log(s3.has(40)); // false
s3.delete(20);
console.log(s3); // { 10, 50, 30 }
s3.clear();
console.log(s3); // {}
console.log("==================================");

// ========================================

let s = new Set(['gfg', 'is', 'course']);
s.forEach(x => console.log(x));

console.log();

for(let x of s.keys()) {
    console.log(x);
}