// Generate Numbers with Given Digits 

/**
 * 
 * I/P: n = 10
 * O/P: 5   6   55  56  65  66  555 556 565 566
 * digits will only have 5, 6 and print 10 numbers
 * 
 * I/P: n = 4
 * O/P: 5   6   55  56
 */

// ==============================
// Naive Solution

/**
 * ==> Traverse through all natural numbers while we have not
 *      generated the n numbers
 * 
 * ==> For every Traversed number, check if it has digits as 5
 *      and 6 only. If yes, print the number and increment the count.
 *      
 * For n = 10, we are going to traverse till 566
 * 
 */

// ====================================
// Idea for the Efficient Solution

/**
 * 1. Create an empty queue, q
 * 2. Add 5 and 6 to q
 * 3. Run a loop n times
 *      => Take out an item from q
 *      => Print the item
 *      => Append 5 to the item and add the new number to q
 *      => Append 6 to the item and add the new number to q
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++;
    }

    dequeue() {
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    sizeOfQueue() {
        return this.size;
    }

    peek() {
        if(this.first === null) return null;
        return this.first.value;
    }


    isEmpty() {
        if(this.size){
            return false;
        }else {
            return true;
        }
    }

}


function printFirstN(n) {
    let q = new Queue();
    q.enqueue('5');
    q.enqueue('6');

    for(let i = 0; i < n; i++) {
        let curr = q.dequeue();
        console.log(curr);
        q.enqueue(curr + '5');
        q.enqueue(curr + '6');
    }
}

printFirstN(10)

/**
 * n = 3, q = [5, 6]
 * i = 0: print('5')
 *          [6, 55, 56]
 * 
 * i = 1: print('6')
 *          [55, 56, 65, 66]
 * 
 * i = 2: print('55')
 *          [56, 65, 66, 555, 556]
 */

// ==========================================================
// Better Implementation -- doubt

// function printFirstNBetter(n) {
//     let q = new Queue();
//     q.enqueue('5');
//     q.enqueue('6');

//     let i;
//     for(let i = 0; (i + q.size) < n; i++) {
//         let curr = q.dequeue();
//         console.log(q.dequeue());
//         q.enqueue(curr + '5');
//         q.enqueue(curr + '6');
//     }
//     console.log(q.size, '============= size')
//     while(i < n) {
//         console.log(q.dequeue());
//         i++;
//     }
// }

// printFirstNBetter(10)