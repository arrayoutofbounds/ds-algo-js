class Queue{
    constructor(){
        this.q = [];
    }

    push(val){
        this.q.unshift(val);
    }

    remove(){
        this.q.pop();
    }
}