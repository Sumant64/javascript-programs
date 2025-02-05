// Implementation of Chaining

class MyHash {
    constructor(b) {
        this.BUCKET = b;
        this.table = [];
        for(let i = 0; i < b; i++) {
            this.table[i] = [];
        }
    }

    insert(x) {
        let i = x % this.BUCKET;
        this.table[i].push(x);
    }

    search(x) {
        let i = x % this.BUCKET;
        for(let j = 0; j < this.table[i].length; j++) {
            if(this.table[i][j] === x) {
                return true;
            }
        }
        return false;
    }

    remove(x) {
        let i = x % this.BUCKET;
        if(this.table[i].indexOf(x) === -1) {
            return ;
        }
        this.table[i].splice(this.table[i].indexOf(x), 1);
    }
}

let hash = new MyHash(7);
hash.insert(70);
hash.insert(71);
hash.insert(56);
console.log(hash.table);
console.log(hash.search(70))
hash.remove(56)
console.log(hash.table);