// Implementation of Open addressing

/**
 * o We will implement open addressing with linear probing.
 * o We will create the elements with all value as -1 initially.
 * o insert --> we will insert the element
 * o remove --> we will remove the element and mark as -2 for delete.
 */

class MyHash{
    constructor(c) {
        this.cap = c;
        this.size = 0;
        this.arr = new Array(c).fill(-1);
    }

    search(x) {
        let h = x % (this.cap);
        let i = h;
        while(this.arr[i] !== -1) {
            if(this.arr[i] === x) {
                return true;
            }
            i = (i + 1) % this.cap;
            if(i === h) {
                return false;
            }
        }
        return false;
    }

    insert(x) {
        if(this.size === this.cap) {
            return false;
        }
        let i = x % this.cap;
        while(this.arr[i] !== -1 && 
            this.arr[i] !== -2 && 
            this.arr[i] !== x
        ) {
            i = (i + 1) % (this.cap);
        }

        if(this.arr[i] === x) {
            return false;
        } else {
            this.arr[i] = x;
            this.size++;
            return true;
        }
    }

    remove(x) {
        let h = x % (this.cap);
        let i = h;
        while(this.arr[i] !== -1) {
            if(this.arr[i] === x) {
                this.arr[i] = -2;
                return true;
            }
            i = (i + 1) % this.cap;
            if(i === h) {
                return false;
            }
        }
        return false;
    }
}

let h = new MyHash(7)
h.insert(21);
h.insert(28);
h.insert(33);
h.insert(34);
console.log(h.arr)
console.log(h.search(21))
h.remove(28);
console.log(h.arr)
