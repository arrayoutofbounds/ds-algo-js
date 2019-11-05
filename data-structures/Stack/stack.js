class Stack {
  constructor(){
    this.store = [];
  }

  push(val){
    this.store.push(val);
  }

  pop(){
    this.store.pop();
  }
}

let s = new Stack()

s.push(1);
s.push(2);
s.push(3);

s.pop();

console.log(s);