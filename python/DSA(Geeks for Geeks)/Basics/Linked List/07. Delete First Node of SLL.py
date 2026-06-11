'''
// Delete first node of singly linked list

/**
 * I/P: 10--> 20--> 30--> 40--> null
 * O/P: 20--> 30--> 40--> null
 * 
 * I/P: 10--> null
 * O/P: null
 * 
 * I/P: null
 * O/P: null
 */
'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def delete_first(head):
    if head is None:
        return

    return head.next

def print_element(head):
    curr = head
    while curr is not None:
        print(curr.data, end=" ")
        curr = curr.next

head = Node(10)
head.next = Node(20)
head.next.next = Node(30)
head.next.next.next = Node(40)

print_element(head)
print()
print('=================')

head = delete_first(head)
print_element(head)
