'''
// Implementation of Queue using Linked List

/**
 * q = new Queue();
 * q.enque(10);
 * q.enque(20);
 * q.enque(30);
 * console.log(q.deque());
 * q.enque(40);
 * console.log(q.getFront());
 * console.log(q.getRear());
 * console.log(q.size());
 * console.log(q.isEmpty());
 */

/**
 * --> Idea for the Implementation
 * o We need to insert at one end and remove from the other end.
 * 
 *      deque() --> | | | | | | <-- enque()
 *                front       rear
 * 
 * o Enque() and Deque() opeartions both will have O(1) time complexity.
 */

// =================================
'''

class Node:
    def __init__(self, x):
        self.data = x
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
        self.size = 0

    def enque(self, x):
        temp = Node(x)
        if self.front == None:
            self.front = temp
        else:
            self.rear.next = temp

        self.rear = temp
        self.size += 1

    def deque(self):
        if self.front == None:
            return None
        res = self.front.data 
        self.front = self.front.next
        self.size -= 1
        return res
    
    def sizeQueue(self):
        return self.size
    
    def isEmpty(self):
        return self.size == 0
    

obj = Queue()
obj.enque(10)
obj.enque(20)
obj.enque(30)
obj.enque(40)


print(obj.sizeQueue())
obj.deque()
print(obj.sizeQueue())


