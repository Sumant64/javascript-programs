// Red Black Tree

/**
--> Properties of Red Black Tree:
    o Every node has a color either red or black.
    o The root of tree is always black.
    o There are no two adjacent red nodes (A red node cannot have a red parent or red child.)
    o Every path from a node (including root) to any of its descendant NULL
    node has the same number of black nodes.

    Ex:
                20b
         10b                40r
                    30b            80b
                25r     35r     70r   100r


    o Number of nodes on the parth from a node to its farthest descendant leaf
    should not be more than twice than the number of nodes on the path of its
    closest descendant leaf.

    o In AVL tree, we are allowed to have different of at most one between two 
    heights and in Red Black Tree we are allowed to have the difference 
    twice.

    o RED Black tree are less strict then AVL Tree. Therefore, there are less
    number of rotations.

    o Insertions and deletions are faster in RED Black Tree compared to AVL
    Tree.

    o Application: 

 */