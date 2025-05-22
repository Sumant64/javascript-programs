// Working of Arrays in Javascript

/**
 * arr = [10, 20, "GfG", 40, true];
 * 
 * --> Advantages:
 *      o Random Access --> we can fetch the single element in constant time.
 *      o Cache Friendly --> the cache is the storage close to cpu, and very fast. Array can be stored in cache for fast access.
 * 
 * --> Disadvantages:
 *      o Insert and delete are slow
 *      o Search is also slow.
 */

// How Dynamic Size array works:
/**
 * --> Pre allocate some extra space.
 * --> If becomes full, do the following:
 *      o Allocate a new space of larger size
 *      o Copy old space to new.
 *      o Free old space.
 * 
 * --> Avg time to push (n+1) items:
 *      o O(1) + O(1) + .... + O(n)
 *      ---------------------------
 *                  n+1
 *      o O(n) + O(n)
 *      -------------
 *            n
 *      o O(1)
 */