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

    unshift(value){
        let newNode = new Node(value);

        if(this.length === 0 ){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return newNode;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;

        let current, count;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
    
            while(count !== index){
                current = current.next;
                count++;
            }
            return current;
        }else{
            count = this.length-1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, value){
        let foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = value
            return true;
        }
        return false;
    }

    insert(value, index){
        let oldNode = this.get(index);
        
    }
}

let list = new DoublyLinkedList();

list.push(99);
list.push(100);
list.unshift('harry');
// console.log(list.get(0));
// console.log(list.get(2));
console.log(list.set(2, 101));
console.log(list);