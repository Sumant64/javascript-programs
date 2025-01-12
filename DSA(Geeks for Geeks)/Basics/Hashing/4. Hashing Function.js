// Hashing Function

/**
 * Hashing:
 * o Large universe of keys --> Hash function --> array to store data with unique keys
 * We can have any set of keys which we want to store. Then we pass it with the
 * hash function which uses some logic to convert that into unique indexes,
 * and the data is stored.
 * 
 * 
 */

// ==========================
// How hash function works:

/**
 * o Should always map a large key to same small key.
 * o should generate values from 0 to m - 1.
 * o shoudl be fast, O(1) for integer and O(len) for string of length 'len'
 * o should uniformly distribute large keys into Hash Table slots.
 */

// =========================
// Examples of Hash function

/**
 * 1. h(large_key) = large_key % m (m is the size of hash table)
 * 2. For strings, weighed sum
 *  str[] = "abcd"
 * (str[0] * x^0 + str[1] * x^1 + str[2] * x^2 + str[3] * x^3 + str[4] * x^4 + str[5] * x^5) % m
 * where is some random number.
 * 
 * 3. Universal Hashing: In which we use mutiple hash function randomly.
 */