// Open Addressing

/**
 * Open Addressing:
 * o No. of slots in hash table >= No of keys to be inserted.
 * o Cache friendly
 * 
 * o Linear Probing: Linear search for the next empty slot if the elemnt is already present.
 *      o We compute the hash function
 *      o We go to that index and compare we linearly hash.
 *      o We stop when one of the three cases arises:
 *          1. Empty set
 *          2. Key found
 *          3. Traverse throught the whole table
 * o Example:
 *   50, 51, 49, 16, 56, 15, 19
 *      hash(key) = key % 7
 * 
 *      0 --> 49
 *      1 --> 50
 *      2 --> 51
 *      3 --> 16
 *      4 --> 56
 *      5 --> 15
 *      6 --> 19
 * 
 * 
 *      
 */

/**
 * o How to handle deletion in open addressing?
 * o Example:
 * 
 * insert(50), insert(51), insert(15), search(15), delete(15), search(15)
 * 
 * hash(key) = key % 7
 * 
 * --> In this, we can't simply empty the slots when we delete, because if we do linear porbing then in case 
 * of search opeartion, it will stop if empty slots are there in between
 * 
 *      0 --> 
 *      1 --> 50
 *      2 --> deleted --> we need to give some key so that it will tell it is deleted
 *      3 --> 15
 *      4 --> 
 *      5 --> 
 *      6 --> 
 * 
 */

/**
 * o Open Addressing
 * o Clustering (A problem with linear probing):
 *      o if the element to insert has index i, and index i is already full, then 
 * we linear probe for the next index to be empty and insert it. 
 * If again the same index come, then again we need to do the same process.
 * This will lead to the cluster formation.
 * o First order cluster.
 */

/**
 * o How to handle clustering problem with linear probing?
 *      o Quadratic probing --> Secondary cluster
 *          hash(key, i) = (h(key) + i^2) % m
 *      o Double hashing
 *          hash(key, i) = (h1(key) + i * h2(key)) % m
 */