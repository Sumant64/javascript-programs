// AVL Tree

/*

--> AVL Tree:
    o It is a BST (For every node, left subtree is smaller and right is greater).
    o It is balanced (For every node, difference between left and right heights does not
    exceed one).

        Balance Factor = |lh - rh|   
        lh - left height, rh - right height

        Balance Factor <= 1

    o Example

            18
        6       20
    2         19

        It is a AVL Tree.
        balance factor of root node is 0
        BF(6) --> 1
        BF(20) --> 1
        BF(19) --> 0
        BF(2) --> 0
    
    o Example
    

            18
        12
    8
        It is not a AVL tree.
        BF(18) --> 2
        BF(12) --> 1
        BF(8) --> 0


*/

// ---------------------------------------------
// Insert Operation

/**
    o Perform normal BST insert
    o Traverse all ancestors of the newly inserted node from the node to root.
    o If find an unbalanced node, check for any of the below cases:
        1. left left unbalanced --> Single rotation
        2. Right Right unbalanced --> Single rotation
        3. Left Right unbalanced --> Double rotation
        4. Right Left unbalanced --> Double rotation

    o Example:
        Insert: 20, 15, 5, 40, 50, 18

        20 ---15-->  20     --5-->      20  (left left case)  15
                    15              15                      5   20
                                5

        
        -->         15          --50-->             15          (Right right case)
                5       20                      5       20
                            40                              40
                                                                50

        (one rotation)   15                --18-->      15          (Right Left Case)
                       5        40                  5       40
                            20      50                    20    50
                                                        18
                            
        
        (after first rotation)             15
                                    5           20
                                            18      40
                                                        50

        (after second rotation)             20
                                    15              40
                                5       18              50

    o Deletion in AVL tree is tough and may require multiple rotation.
 */