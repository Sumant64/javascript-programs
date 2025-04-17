// Self Balancing BST

/**

--> Self Balancing BST:
    o It means that the elements are so arranged in the BST, that the height is the shortest one.

Idea: Keep the height as O(log n)

o Background: Same set of keys can make different height BSTs

Order 1: 7, 10, 11, 15, 30, 35, 40
    Ex:
        7
          10
             11
               15
                 30 
                   35
                     40

Order 2: 15, 10, 7, 11, 35, 30, 40

    Ex:
                    15
            10              35
        7       11      30      40

Both the bst are having same elements but the arrangement are different.

-------------------------------------------------------------------------

o If we know the keys in advance, we can make a perfectly balanced BST.

o problem is to how to keep it balanced when random insertions/deletions are happening?
------------------------------------------------

o The idea is to do some restructuring (or re-balancing) when doing insertions/deletions.

o Example
    Insert 100, 200, and 300 in an empty BST:

    o 100
        200
    
    o 100
        200
            300

    o After restructure:
            200
        100     300
    o Here we rotated the BST single tree as anti-clockwise direction.
    
o Example
    

 */