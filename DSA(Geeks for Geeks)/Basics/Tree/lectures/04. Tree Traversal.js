// Tree traversal

/**
 * --> Two types of tree traversal:
 *      o Breadth First (or level order) --> traverse row by row
 *      o Depth First   --> traverse one side then go to the other
 *          1. Inorder
 *          2. Preorder
 *          3. Post order
 */


// Depth First Traversal
/**
 * Inorder (left Root Right)
 * Preorder(Root Left Right)
 * Postorder (Left Right Root)
 * 
 * 
 * Example:
 *              10
 *          20      30
 * 
 * Inorder --> 20, 10, 30
 * Preorder --> 10, 20, 30
 * Postorder --> 20, 30, 10
 */

// Example
/**
 *                              10
 *                      20              30
 *                  40       50              60
 *                         70  80 
 * 
 * Inorder: 40, 20, 70, 50, 80, 10, 30, 60
 * PreOrder: 10, 20, 40, 50, 70, 80, 30, 60
 * Postorder: 40, 70, 80, 50, 20, 60, 30, 10
 */