// Sorting in Javascript

// working with string
let a1 = ["gfg", "courses", "javascript"]
a1.sort();
console.log(a1); // [ 'courses', 'gfg', 'javascript' ]

// -----------------------------------------------------
// working with number (false result)

let a2 = [10, 25, 1000, 30];
a2.sort();
console.log(a2); // [ 10, 1000, 25, 30 ] --> wrong behaviour, takes only initials 1, 2, 3

// -------------------------------------------------------
// Correction in behaviour

let a3 = [10, 1000, 30, 25];
a3.sort((x, y) => x - y); //ascending order
console.log(a3);

a3.sort((x, y) => y - x);
console.log(a3); // descending order

// --------------------------------------------------------
// Soring within objects

let a4 = [
    {name: 'Aman', marks: 80},
    {name: 'Rishab', marks: 90},
    {name: 'Amit', marks: 80},
]

a4.sort((x, y) => x.marks - y.marks);
console.log(a4);
/*
[
  { name: 'Aman', marks: 80 },
  { name: 'Amit', marks: 80 },
  { name: 'Rishab', marks: 90 }
]
*/
/**
 * Here Aman and amit both are having 80 marks. but the natural order is preserved i.e. aman is coming amit
 */