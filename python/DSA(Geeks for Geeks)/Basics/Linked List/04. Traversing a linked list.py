# Taversing a linked list

'''
/**
 * I/P: 10--> 20--> 30--> 40--> null
 * O/P: 10
 *      20
 *      30
 *      40
 * 
 * I/P: null
 * O/P:
 */
'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def print_list(head):
    curr = head
    while curr is not None:
        print(curr.data, end = " ")
        curr = curr.next
    
head = Node(10)
head.next = Node(20)
head.next.next = Node(30)
head.next.next.next = Node(40)

print_list(head)