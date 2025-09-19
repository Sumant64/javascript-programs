// Binay Heap (Heapify and Extract)

/**
 * Extract Min::
 * ------------
 * 
 *                                  20 (0)
 *                   25 (1)                             30(2)
 *           35(3)             40(4)            80(5)           32(6)
 *      100(7)    70(8)     60(9)
 * 
 * 
 * Array: [20, 25, 30, 35, 40, 80, 32, 100, 70, 60]
 * 
 *              Extract Min
 *      20 should be removed and the remaining elements should follow min heap properties
 *    
 * 
 * o Technique 1:
 *      o removing directly 20 from the array will take O(n) time, but we can do it in O(log n) time.
 *      o Firstly we will swap the last element (60) with (20).
 *      o Then we will remove 20 with pop operation which is O(1).
 *      o Then we will heapify the heap to match the heap properties.
 *      o Time Complexity O(log n);
 */


/**
 * 
 *                              60
 *                        25          30
 *                   35      40     80    32
 *                100   70
 * 
 *      Swap(25, 60):
 * 
 * 
 *                                    25
 *                              60           30
 *                          35     40    80     32
 *                      100   70
 * 
 *      Swap(60, 35)
 * 
 *                              25
 *                      35              30
 *                  60      40        80    32
 *              100    70
 * 
 * 
 */


class MinHeap {
    //... some codes...

    minHeapify(i) {
        let arr = this.arr;
        let lt = this.left(i), rt = this.right(i);
        let smallest = i, n = arr.length;

        if(lt < n && arr[lt] < arr[smallest]) {
            smallest = lt;
        }

        if(rt < n && arr[rt] < arr[smallest]) {
            smallest = rt;
        }

        if(smallest !== i) {
            [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
            this.minHeapify(smallest);
        }
    }
}


// =========================

/**
 * Extract Min
 * ===========
 * 
 * o In this function we will swap(20, 60) and pop() and remove 20
 * 
 */

class MinHeap {
    //... some codes...

    extractMin() {
        let arr = this.arr;
        let n = arr.length;
        if(n === 0) {
            return null;
        }

        let res = arr[0];
        arr[0] = arr[n - 1];
        arr.pop();
        this.minHeapify(0);
        return res;
    }

}