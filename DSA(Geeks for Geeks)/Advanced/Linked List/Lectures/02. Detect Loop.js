// Detect loop in linked list

/**
 * I/P: 10 --> 15 --> 12 --> 20 (20 next is connected with 15)
 *              |            |
 *               ------------ 
 * O/P: true
 * 
 * I/P: head = null
 * O/P: false
 * 
 * I/P: 10 --> 20 --> null
 * O/P: false
 * 
 * I/P: 10 --> 20 --> 30
 *       |             |   
 *        -------------
 * O/P: true
 */

// ===============================================
// Method 1: Naive Solution

/**
 * 1. Run a loop from head. For every node x, do the following:
 * a. Let y be the next of x.
 * b. If y is null, return false.
 * c. Else run a loop from head to x. If any node is found to be the same
 * as y then return true.
 * 
 * Time: O(n^2)
 * Space: O(1)
 */

// ===================================================

// Method 2: O(n) time but modifies linked list node structure.

/**
 * We add a boolean field "visited" in the Node. We initialize 
 * visited as false in the Node's contructor.
 * 
 * We traverse the list and mark visited of the visited nodes as true,
 * if it is false.
 * If already true, we return true;
 * If we read null, we return false.
 */

// =====================================================

// Method 3: (Modifies linked list) O(n)

/**
 * 1. Create a dummy node
 * 2. Traverse the list. Do following for every node x.
 *      a. If next of x is the dummy node, return true.
 *      b. Else make the next of x as the dummy node.
 * 3. If we reach null, we return false.
 */