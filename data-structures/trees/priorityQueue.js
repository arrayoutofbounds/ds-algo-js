class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    //@TODO add in time here to ensure that someone with same priority gets chosen based on insertion time
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(i, j) {
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);

    let index = this.values.length - 1; // since its being inserted at the end via a push method
    let parent = Math.floor((index - 1) / 2);

    while (
      this.values[parent] &&
      this.values[index] &&
      this.values[parent].priority >= this.values[index].priority
    ) {
      this.swap(parent, index);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
    return this.values;
  }

  dequeue() {
    let max = this.values.shift(); // we are taking the top priority out.
    if (this.values.length === 0) { // if no more nodes, we are done
      this.values = [];
      return max;
    }

    let newFirst = this.values.pop(); // get the last node
    this.values.unshift(newFirst); // put it as the root
    this.maxHeapify(0); // start heapify from the root; this is where you re order things according to priority.

    return max; // return removed node
  }

  // RECURSIVE AND SOOOOOO MUCH CLEANER
  maxHeapify(i) {
    let leftIndex = 2 * i + 1; // get left child
    let rightIndex = 2 * i + 2; // get right child
    let highest = i;
    let heapSize = this.values.length;
    let heap = this.values;

    if (leftIndex < heapSize && heap[leftIndex].priority < heap[i].priority) { // THIS MAKES IT A MIN HEAP
      highest = leftIndex;
    }

    if ( rightIndex < heapSize && heap[rightIndex].priority < heap[highest].priority) { // DAMN SMART ALGORITHM. READ THIS LINE TWICE
      highest = rightIndex;
    }
    if (highest !== i) {
      this.swap(i, highest);
      this.maxHeapify(highest);
    }
    // the base case here is that when this function ends, its returning by default. However, as long as max heapify is called its stacking up recursively.
  }
}

module.exports = PriorityQueue

// let ER = new PriorityQueue();

// ER.enqueue('common cold', 5);
// ER.enqueue('gunshot', 1);
// ER.enqueue('high fever', 4);
// ER.enqueue('broken arm', 2);
// ER.enqueue('glass in foot', 3);

// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
