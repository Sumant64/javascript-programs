'''
// Sorted insert in a singly linked list

/**
 * I/P: 10--> 20--> 30--> 40, x = 25
 * O/P: 10--> 20--> 25--> 30--> 40
 * 
 * I/P: 10--> 25, x = 5
 * O/P: 5--> 10--> 25
 * 
 * I/P: head = null, x = 5
 * O/P: 5
 */

/**
 * Idea for sorted insert
 * 10--> 20--> 30--> 40--> 50
 * x = 45
 * 
 * We will make curr = head.
 * We will check curr.next data is smaller than 45 then curr = curr.next 
 * or if it is greater than we will stop there and map the x accordingly.
 * 
 */
'''


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def print_elem(head):
    curr = head
    while curr is not None:
        print(curr.data, end=" ")
        curr = curr.next

    print()

def sorted_insert(head, x):
    temp = Node(x)

    if head is None:
        return temp
    
    if x < head.data:
        temp.next = head
        return temp
    
    curr = head
    while curr.next is not None and curr.next.data < x:
        curr = curr.next

    temp.next = curr.next
    curr.next = temp
    return head

head = None
head = sorted_insert(head, 10)
head = sorted_insert(head, 20)
head = sorted_insert(head, 30)
head = sorted_insert(head, 40)
head = sorted_insert(head, 50)

print_elem(head)