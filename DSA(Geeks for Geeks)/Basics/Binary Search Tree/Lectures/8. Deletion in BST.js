// Deletion in BST

/**
 * I/P:             50
 *              30      70
 *          20    40  60   80
 *  
 *  x = 40
 * 
 * O/P:             50
 *              30      70
 *          20        60   80
 * 
 * 
 * I/P:             50
 *              30      70
 *          20        60   80
 *  
 *  x = 30
 * 
 * O/P:             50
 *              20      70
 *                    60   80
 * 
 * I/P:             50
 *              30      70
 *          20        60   80
 *  
 *  x = 50
 * 
 * O/P:             60
 *              20      70
 *                         80
 */

/**
 * Three ways to delete the nodes:
 * 1. From the leaf node.
 * 2. From the middle.
 * 3. Root node delete.
 */