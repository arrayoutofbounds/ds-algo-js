class Node {
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val){
    let node = new Node(val);
    if(this.size === 0){
      this.first = node;
      this.last = node;
    }else{
      node.next = this.first;
      this.first = node;
    }
    this.size++;
    return this.size;
  }

  pop(){
    if(this.size === 0) return null;
    let temp = this.first;
    if(this.first === this.last){
      this.last = null; // making sure last element is null if only 1 element
    }
    this.first = this.first.next; // first is null if only 1 element
    temp.next = null;
    this.size--;
    return temp.val;
  }
}

let s = new Stack();

s.push(1)
s.push(2)
s.push(3)
console.log(s.pop());
console.log(s);