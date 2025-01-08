// Floor in BST program

function getFloor(root, x) {
    let res = null;
    while(root !== null) {
        if(root.key === x) {
            return root;
        } else if(root.key > x) {
            root = root.left;
        } else {
            res = root;
            root = root.right;
        }
    }

    return res;
}