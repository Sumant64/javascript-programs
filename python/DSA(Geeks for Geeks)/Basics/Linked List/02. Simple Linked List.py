# Simple Linked list

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

temp1 = Node(10)
temp2 = Node(20)
temp3 = Node(30)

temp1.next = temp2
temp2.next = temp3

head = temp1

# print(head)
# print(head.data)
# print(head.next.data)
# print(head.next.next.data)


# =========================================
# Alternate Way

head1 = Node(10)
head1.next = Node(20)
head1.next.next = Node(30)

print(head1.data)
print(head1.next.data)
print(head1.next.next.data)