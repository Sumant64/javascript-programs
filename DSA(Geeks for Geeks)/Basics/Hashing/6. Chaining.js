// Chaining

/**
 * keys = [50, 21, 58, 17, 15, 49, 56, 22, 23, 25]
 * o hash(key) = key % 7
 * 
 *      0 --> 21 --> 49 --> 56
 *      1 --> 50 --> 15 --> 22
 *      2 --> 58 --> 23
 *      3 --> 17
 *      4 --> 25
 *      5 --> 
 *      6 --> 
 *      
 * 
 * o Hash table (array of linked list), means chaining will be 
 * done with the linked list.
 */

/**
 * Performance:
 * m = No. of slots in Hash table
 * n = No. of keys to be inserted.
 * 
 * Load Factor = n/m
 * Expected chain length = alpha
 * Expected Time to search = O (1 + alpha)
 * Expected Time to Insert/Delete = O (1 + alpha)
 */

/**
 * Data Structures for Strong Chains:
 * o Linked List
 * o Dynamic Sized Array (Vector in C++, Arraylist in Java, List in Python)
 * o Self Balancing BST (AVL Tree, Red Black Tree)
 */