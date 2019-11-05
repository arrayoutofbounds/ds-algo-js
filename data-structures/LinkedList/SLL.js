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
        return this; // returns entire list
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
        currentHead.next = null;
        return currentHead; // returns removed node
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
        return this; //returns full list
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
        return current; // gives back chosen node at index.
    }

    set(val, index){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(value);
        if(index === 0 ) return !!this.unshift(value);

        let prevNode = this.get(index-1); // get previous node to the one we want
        let currentNode = prevNode.next; // get the node we want to replace
        let newNode = new Node(value); // make a new node for insertion

        newNode.next = currentNode; // new node points to the current one at the index
        prevNode.next = newNode; // set previous node to the new node
        this.length++;
        return true;
    }

    remove(index, value){
        if(index <= 0 || index >= this.length) return undefined;
        if(index === 0 ) return this.shift();
        if(index === this.length ) return this.pop();

        let prevNode = this.get(index - 1);
        let remove  = prevNode.next;
        prevNode.next = remove.next;
        this.length--;
        remove.next = null;
        return remove;
    }

    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
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

            prev = node;
            node = next;
        }

        return this;
    }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('there');
list.push('!');
// list.shift();
// list.shift();
// console.log(list);
// list.pop();
// list.unshift(1);
// console.log(list.get(0));
// console.log(list.set('val', 1))
// console.log(list.get(1))

// console.log(list.set('val', 5))
// console.log(list.get(5))

// console.log(list.remove(1));
// console.log(list);
list.reverse();
console.log(list.print());

// console.log(list.insert(2,'2'));
// console.log(list.length);