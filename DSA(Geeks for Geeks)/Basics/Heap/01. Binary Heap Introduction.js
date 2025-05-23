// Binary Heap Introduction

/**
 * --> Binary Heap:
 *      o Used in HeapSort.
 *      o Used to implement Priority Queue.
 * 
 * --> Two types of binary heap:
 *      o Min Heap --> Highest priority item is assigned lowest value.
 *      o Max Heap --> Highest priority item is assigned highest value.
 */

/**
 *  o Binary heap is a complete binary tree (Stores as an array)
 * 
 * --> Complete Binary Tree
 *      o Binary tree in which all the nodes are filled except the last layer.
 *      o In the last layer the node is filled from left to right.
 *      o Example of complete binary tree.
 *                            N
 *                    N            N
 *                N       N      N    N
 *            N      N  N
 * 
 *      o Example of not complete binary tree.
 *                          N
 *                  N               N
 *             N        N       N       N
 *        N       N        N
 * 
 */

/**
 *  o Heap is always written as array, just to understand better we use representation as complete binary tree.
 * 
 *  o                       10 (0 index)
 *                  20(1)             30(2)
 *            40(3)     50(4)     60(5)
 * 
 *  o [10, 20, 30, 40, 50, 60]
 *      
 *  o To find the index acc. to binary tree and array
 *      left(i)(in Binary tree) = 2i + 1
 *      right(i) = 2i + 2
 *      parent(i) = Math.floor((i - 1)/2)
 * 
 *  o left(1) = 3
 *    right(1) = 4 --> 50
 *    parent(5) = 2 --> 30
 * 
 * o The bottom right most element of the binary tree i.e. 60 will always be the last index in array representation.
 * 
 */