class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const Queue = require('../Queue/list');

class BST {
    constructor(){
        this.root = null;
    }

    // this is crap....do not use it
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

    insertIterativeBetter(value){
        let newNode = new Node(value);

        let current = this.root;
        let parent = null;

        while(current !== null){
            parent = current;
            if(value < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
        }

        if(parent === null){
            this.root = newNode;
        }else if(value < parent.value){
            parent.left = newNode;
        }else{ 
            parent.right = newNode; // this happens when greater than or equal to. so if equal, its jsut replacing the node.
        }

        return this;
    }

    // recursive
    find(node, value){
        if(node === null || node.value === value) return node;
        
        if(value < node.value){
            return this.find(node.left, value);
        }else{
            return this.find(node.right, value);
        }
    }

    findIterative(value){
        if(this.root === null) return false;

        let current = this.root;
        let isFound = false;

        while(current && !isFound){
            if(current.value == value){
                isFound = true;
            }else if(value < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
        }

        return isFound;
    }

    bfs(){
        let node = this.root;
        let visited = [];
        let q = new Queue();

        q.enqueue(node);
        while(q.size){
            node = q.dequeue();
            visited.push(node); // what we return

            if(node.left) q.enqueue(node.left);
            if(node.right) q.enqueue(node.right);
        }
        return visited;
    }

    dfsPreorder(){
        let visited = [];
        function helper(node){
            if(!node) return;

            visited.push(node);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        }
        helper(this.root);
        return visited;
    }

    dfsPostorder(){
        let visited = [];
        function helper(node){
            if(!node) return;

            if(node.left) helper(node.left);
            if(node.right) helper(node.right);

            visited.push(node);
        }
        helper(this.root);
        return visited;
    }

    dfsInorder(){
        let visited = [];
        function helper(node){
            if(!node) return;

            if(node.left) helper(node.left);
            visited.push(node);
            if(node.right) helper(node.right);
        }
        helper(this.root);
        return visited;
    }

    // min
    // max
    // delete
}

let tree = new BST();

// let node = tree.insertRecursive(null, 10);
// tree.insertRecursive(node, 5);
// tree.insertRecursive(node, 13);
// tree.insertRecursive(node, 11);



// tree.insertIterativeBetter(2);
// tree.insertIterativeBetter(16);
// tree.insertIterativeBetter(15);
// console.log(tree);

// console.log(tree.findIterative(15));


tree.insertIterativeBetter(10)
tree.insertIterativeBetter(6)
tree.insertIterativeBetter(15)
tree.insertIterativeBetter(3)
tree.insertIterativeBetter(8)
tree.insertIterativeBetter(20)

// console.log(tree);

// console.log(tree.bfs());

console.log(tree.dfsPreorder());