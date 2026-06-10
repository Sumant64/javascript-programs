# Recursive traversal of linked list

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def r_print(head):
    if head is None:
        return
    
    print(head.data)
    r_print(head.next)

def r_print_same_line(head):
    if head is None:
        return
    
    print(head.data, end = " ")
    r_print_same_line(head.next)

head = Node(10)
head.next = Node(20)
head.next.next = Node(30)
head.next.next.next = Node(40)

r_print(head)
r_print_same_line(head)