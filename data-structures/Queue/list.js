class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){ // put in at end as that is constant time.
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue(){ // remove from front as that is constant time.
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();

q.enqueue(1);
q.enqueue(2);
console.log(q.enqueue(3));

q.dequeue();

console.log(q);

