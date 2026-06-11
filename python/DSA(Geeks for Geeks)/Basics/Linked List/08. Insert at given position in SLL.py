'''
// Insert at the given position in Singly Linked List

/**
 * I/P: 10--> 50--> 70--> 90--> null
 *      pos = 2, data = 20
 * O/P: 10--> 20--> 50--> 70--> 90--> null
 * 
 * I/P: 10--> 20--> null
 *      pos = 3, data = 30
 * O/P: 10--> 20--> 30--> null
 * 
 * I/P: 10--> 20--> null
 *      pos = 1, data = 30
 * O/P: 30--> 10--> 20
 * 
 * I/P: 10--> null
 *      pos = 3, data = 5
 * O/P: null
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


def insert_pos(head, pos, data):
    temp = Node(data)

    if pos == 1:
        temp.next = head
        return temp
    
    curr = head

    # i = 1
    # while curr is not None and i <= pos - 2:
    #     curr = curr.next
    #     i = i + 1

    for _ in range(1, pos - 1):
        if curr is None:
            return head
        curr = curr.next
    
    if curr is None:
        return head

    temp.next = curr.next
    curr.next = temp

    return head


head = None
head = insert_pos(head, 1, 10)
head = insert_pos(head, 2, 20)
head = insert_pos(head, 3, 30)
head = insert_pos(head, 1, 5)

print_elem(head)

