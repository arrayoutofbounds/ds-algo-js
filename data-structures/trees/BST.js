class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value<current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if( value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    insertRecursive(node, value){
        if(node === null){
            this.root = new Node(value);
            return this.root;
        }

        if(value < node.value){
            if(node.left === null){
                node.left = new Node(value);
            }else{
                node.left = this.insertRecursive(node.left, value);
            }
        }else{
            if(node.right === null){
                node.right = new Node(value);
            }else{
                node.right = this.insertRecursive(node.right, value);
            }
        }

        return node;
    }
}

let tree = new BST();

let node = tree.insertRecursive(null, 10);
tree.insertRecursive(node, 5);
tree.insertRecursive(node, 13);
tree.insertRecursive(node, 11);
// tree.insert(2);
// tree.insert(16);
console.log(tree);

console.log(tree.root.right);
console.log(tree.root.right.left);