// Node class
class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

// Queue class
class Queue {
    constructor() {
        this.front = this.rear = null;
    }

    // Function to check if the queue is empty
    isEmpty() {
        return this.front === null;
    }

    // Function to add an element to the queue
    enqueue(new_data) {
        const new_node = new Node(new_data);
        if (this.isEmpty()) {
            this.front = this.rear = new_node;
            this.printQueue();
            return;
        }
        this.rear.next = new_node;
        this.rear = new_node;
        this.printQueue();
    }

    // Function to remove an element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        const temp = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.printQueue();
    }

    // Function to print the current state of the queue
    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let temp = this.front;
        let queue_string = "Current Queue: ";
        while (temp !== null) {
            queue_string += temp.data + " ";
            temp = temp.next;
        }
        console.log(queue_string);
    }
}

const q = new Queue();

// Enqueue elements into the queue
q.enqueue(10);
q.enqueue(20);

// Dequeue elements from the queue
q.dequeue();
q.dequeue();

// Enqueue more elements into the queue
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

// Dequeue an element from the queue
q.dequeue();