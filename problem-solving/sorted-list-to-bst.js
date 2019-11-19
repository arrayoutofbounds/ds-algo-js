const Queue = require('../data-structures/Queue/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// // best is to find the median so you can ensure the children go either left or right.
// // if following array representation
// // left child = 2n + 1
// // right child = 2n + 2
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

 // solution 1
 // O(n) + O(logn) = O(n)
 // space = O(n) due to the array
function sortedListToBST(head) {
    let values = [];
    let current = head;
    while(current){
        values.push(current.val);
        current = current.next;
    }

    function sortedArrayToBst(l,r){
        if(l > r){
            return null;
        }
        let mid = Math.floor((l+r)/2)
        let node = new TreeNode(values[mid]);

        if(l === r){
            return node;
        }

        node.left = sortedArrayToBst(l, mid-1);
        node.right = sortedArrayToBst(mid+1, r);
        return node;
    }

    return sortedArrayToBst(0, values.length-1);
};

//solution 2
// in order simulation
function sortedListToBST2(head) {
    let size = 0;
    let current = head;
    while(current){
        current = current.next;
        size++;
    }

    function convert(l,r){
        if(l > r){
            return null;
        }
        let mid = Math.floor((l+r)/2)

        // left
        node.left = convert(l, mid-1);

        //middle
        let node = new TreeNode(head.val);

        head = head.next;

        if(l === r){
            return node;
        }

        node.right = convert(mid+1, r);
        return node;
    }

    return convert(0, size-1);
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function bfs(root){
    let node = root;
    let visited = [];
    let q = new Queue();

    q.enqueue(node);
    while(q.size){
        node = q.dequeue();
        visited.push(node.val); // what we return

        if(node.left) q.enqueue(node.left);
        if(node.right) q.enqueue(node.right);
    }
    return visited;
}

function print(n){
    let arr = [];
    let current = n;
    while(current){
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

let n = new ListNode(0);
let head = n;

head.next = new ListNode(1);
head = head.next;

head.next = new ListNode(2);
head = head.next;

head.next = new ListNode(3);
head = head.next;

head.next = new ListNode(4);
head = head.next;

head.next = new ListNode(5);


console.log(bfs(sortedListToBST(n)));