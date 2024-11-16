// Stack data structure in javascirpt

/**
 *  |       |             |      |        
 *  |       |  (push 10)  |      | 
 *  |       | -->         |  10  |
 *  |-------|             |------|
 * 
 *  |   30  |             |      |        
 *  |   20  |  (pop 30)   |   20 | 
 *  |   10  | -->         |   10 |
 *  |-------|             |------|
 */

/**
 * LIFO order --> Last In First Out
 * Stack Operations:
 * o isEmpty() : Returns true if stack is empty, else false.
 * 
 * o push(x) : Inserts an item to the top of the stack.
 * 
 * o pop() : Removes an item from the top.
 * 
 * o peek() : Returns the top item.
 * 
 * o size() : Returns the size of stack.
 */

// =========================================
// Example Usage

/**
 * st = new Stack();
 * st.push(15);
 * st.push(20);
 * st.push(35);
 * 
 * print(st.peek());
 * print(st.pop());
 * print(st.peek());
 * print(st.size());
 * st.push(5);
 * print(st.peek());
 * print(st.isEmpty());
 */

//==========================================
// Extreme conditions in Stack

/**
 * Underflow: When pop() or peek() called on empty stack.
 * Overflow: When push is called on a full stack.
 */