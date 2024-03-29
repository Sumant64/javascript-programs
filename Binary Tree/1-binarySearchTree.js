class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true) {
            if(value === current.value) return undefined;
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // find the value and return the value
    find(value) {
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found) {
            if(value < current.value){
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }


    // check the value is there or not, return true or false
    contains(value) {
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !false){
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // Breadth first Tree traversel
    BSF() {
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    // Depth first pre order
    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    //Depth first post order
    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    //Dept first In order
    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


//      10
//   5     13
// 2  7  11  16

var res = new BinarySearchTree();
res.insert(10)
res.insert(5)
res.insert(13)
res.insert(11)
res.insert(2)
res.insert(16)
res.insert(7)
res.BSF();
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();