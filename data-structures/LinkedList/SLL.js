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
        let current = this.head;
        let newTail = this.head;
        
        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current; // this returns the removed node
    }


    // remove from front
    shift(){
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length ===0){
            this.tail = null;
        }
        return currentHead;
    }

    // add to the beginning of the list
    unshift(val){
        let n = new Node(val);
        if(!this.head){
            this.head = n;
            this.tail = this.head;
        }else{
            n.next = this.head;
            this.head = n;
        }
        this.length++;
        return this;
    }

    // get element at index n
    get(index){
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(val, index){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('there');
// list.pop();
// console.log(list);
// list.pop();
// list.unshift(1);
// console.log(list.get(0));
console.log(list.set('val', 1))
console.log(list.get(1))
// console.log(list);