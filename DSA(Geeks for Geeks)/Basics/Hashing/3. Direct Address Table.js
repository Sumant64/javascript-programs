// Direct Address Table

/**
 * Direct Address Table:
 * o Imagine a situation where you hae 1000 keys with values form (0 to 999), 
 * how would you implement following in O(1) time.
 * 1. Search 
 * 2. Insert 
 * 3. Delete
 * o Solution> We will make a array with 0 - 999 index and fill every element with 0.
 * o Then for every insert: we will have the value of that index as 1.
 *   Then for every delete: we will make the value of that index as 0.
 *   Then for every search: if the index is present then the element is there.
 * o Example operation:
 *   insert(10)
 *   insert(20)
 *   insert(119)
 *   search(20)
 *   search(10)
 *   delete(119)
 * 
 *  insert(i) {
 *      table[i] = 1;
 * }
 * 
 *  delete(i) {
 *      table[i] = 0;
 * }
 * 
 *  search(i) {
 *      return table[i];
 * }
 */


// Disadvantages of Direct Address Table:
/**
 * o Not used for the large numbers.
 * o Cannot be used for the strings.
 * o 
 */