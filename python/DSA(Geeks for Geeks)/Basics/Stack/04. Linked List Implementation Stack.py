# // Linked List Implementation of Stack

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.head = None
        self.size = 0

    def stack_size(self):
        return self.size
    
    def is_empty(self):
        return self.head is None
    
    def push(self, x):
        temp = Node(x)
        temp.next = self.head
        self.head = temp
        self.size += 1

    def pop(self):
        if self.head is None:
            return None
        
        res = self.head.data
        self.head = self.head.next
        self.size -= 1
        return res
    
    def peek(self) :
        if self.head is None:
            return None
        
        return self.head.data
    
st = Stack()
st.push(10)
st.push(20)
st.push(30)
st.push(40)

print(st.peek())

st.pop()
print(st.peek())

print(st.stack_size())
        