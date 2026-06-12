'''
// Middle of linked list in javascript
// for odd list --> one middle element
// for even list --> two middle element in which we will take the after one.

/**
 * I/P: 10--> 5--> 20--> 15--> 25
 * O/P: 20
 * 
 * I/P: 10--> 20--> 30--> 40
 * O/P: 30
 * 
 * I/P: 10
 * O/P: 10
 * 
 * I/P: null
 * O/P:
 */
'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def print_elem(head):
    curr = head
    while curr is not None:
        print(curr.data)
        curr = curr.next

# ============================================
'''
// method 1
/**
 * 1. count total no of nodes
 * 2. Run a loop [count/2] times.
 * 
 * 10--> 20--> 30--> 40--> 50
 * count = 5
 * 5/2 = 2 --> 0, 1, 2 Index (30)
 * 
 * 10--> 20--> 30--> 40--> 50--> 60
 * count = 6
 */
'''



def find_mid(head):
    if head is None:
        return 
    
    count = 0
    curr = head
    while curr is not None:
        curr = curr.next
        count += 1

    curr = head

    for _ in range(count//2):
        curr = curr.next
    
    print(curr.data)

head = Node(10)
head.next = Node(20)
head.next.next = Node(30)
head.next.next.next = Node(40)
head.next.next.next.next = Node(50)

# find_mid(head)

# ===============================================
'''
/**
 * Idea: 
 * o Use two references:
 * a> slow
 * b> fast
 * o Move the fast at double speed. When fast reaches end, slow reaches middle.
 * 
 */
'''

def find_mid_eff(head):
    if head is None:
        return
    
    slow = head
    fast = head

    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
    
    print(slow.data)

find_mid_eff(head)
