# Insert at the end of singly linked list

'''
/**
 * I/P: 10--> 20--> 30--> null
 * x = 40
 * O/P: 10--> 20--> 30--> 40--> null
 * 
 * I/P: null, x = 10
 * O/P: 10--> null
 * 
 * I/P: 10--> null, x = 20
 * O/P: 10--> 20--> null
 */
'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def insert_end(head, x):
    temp = Node(x)
    if head is None:
        return temp
    
    curr = head
    while curr.next is not None:
        curr = curr.next
        
    curr.next = temp
    return head

def print_ll(head):
    curr = head
    while curr is not None:
        print(curr.data)
        curr = curr.next

head = None
head = insert_end(head, 10)
head = insert_end(head, 20)
head = insert_end(head, 30)
head = insert_end(head, 40)
print_ll(head)

