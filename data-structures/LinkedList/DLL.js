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
        if(index < 0 || index > this.length) return false;
        if(index === 0 ) return !! this.unshift(value);
        if(index === this.length) return !! this.push(value);

        let newNode = new Node(value);
        let beforeNode = this.get(index-1); // get previous node
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;

        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0 ) return !! this.shift();
        if(index === this.length) return !! this.pop();

        let beforeNode = this.get(index-1);
        let currentNode = beforeNode.next;
        let afterNode = currentNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        currentNode.prev = null;
        currentNode.next = null;

        this.length--;
        return currentNode;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for(let i = 0; i< this.length; i++){
            next = node.next;

            node.next = prev;
            node.prev = next;

            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new DoublyLinkedList();

// list.push(99);
// list.push(100);
// list.unshift('harry');
// console.log(list.get(0));
// console.log(list.get(2));
// console.log(list.set(2, 101));
list.push('harry')
list.push('ron')
list.push('hagrid')
list.insert('hermoine',0);
// list.remove(1);
console.log(list);
console.log(list.reverse());