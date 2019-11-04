class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // pushing item to the end of the list
    push(val){
        let n = new Node(val);
        if(!this.head){
            this.head = n;
            this.tail = n;
        }else{
            this.tail.next = n;
            this.tail = n;
        }
        this.length++;
        return this;
    }

    // take item off from the end
    pop(){
        if(!this.head) return undefined;
    }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('there');
console.log(list);