class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);

        if(this.length === 0 ){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;

        let prevTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.tail = prevTail.prev;
            this.tail.next = null;
            prevTail.prev = null;
        }        
        this.length--;
        return prevTail;
    }

    shift(){
        if(this.length === 0 ) return undefined;

        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}

let list = new DoublyLinkedList();

list.push(99);
list.push(100);
list.shift()
list.shift()
console.log(list);