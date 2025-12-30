// Queue Data Structure

/**
 *  dequeue() <--   10  |   15  |   20  |   30  |   40  | <-- enqueue()
 *                  front                           rear
 * 
 * Opearations:
 *  o enqueue()
 *  o dequeue()
 *  o getFront()
 *  o getRear()
 *  o size()
 *  o isEmpty()
 */

/**
 * q = new Queue();
 * q.enque(10);   [10]
 * q.enque(20);   [10, 20]
 * q.enque(30);   [10, 20, 30]
 * q.enque(40);   [10, 20, 30, 40]
 * 
 * print(q.deque());    [20, 30, 40]
 * print(q.deque());    [30, 40]
 * print(q.getFront());     30
 * print(q.getRear());      40
 */