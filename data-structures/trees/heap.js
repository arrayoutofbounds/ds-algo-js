// used to make priority queues

class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    swap(i,j){
        let temp = this.values[i];
        this.values[i] = this.values[j];
        this.values[j] = temp;
    }

    insert(value){
        this.values.push(value);

        let index = this.values.length-1;
        let parent = Math.floor((index-1)/2);
        
        while(this.values[parent] < this.values[index]){
            this.swap(parent,index);
            index = parent;
            parent = Math.floor((index-1)/2);
        }
        return this.values;
    }

    swap(i, j){
        let temp = this.values[i];
        this.values[i] = this.values[j];
        this.values[j] = temp;
    }

    extractMax(){
        let max = this.values.shift();
        if(this.values.length === 0){
            this.values = [];
            return max;
        }

        let newFirst = this.values.pop();
        this.values.unshift(newFirst);

        // start re adjusting heap
        let index = 0;

        while(true){
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let leftChild, rightChild;
            let length = this.values.length;
            let swap = null;

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if(leftChild > newFirst){
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild > newFirst) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIndex;
                }
            }

            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = newFirst;
            index = swap;
        }

        return max;
    }

    extractMaxRecursive(){
        let max = this.values.shift();
        if(this.values.length === 0){
            this.values = [];
            return max;
        }

        let newFirst = this.values.pop();
        this.values.unshift(newFirst);
        this.maxHeapify(0); // start heapify from the root;

        return max;
    }

    // RECURSIVE AND SOOOOOO MUCH CLEANER
    maxHeapify(i){
        let leftIndex = (2* i) + 1;
        let rightIndex = (2* i) + 2;
        let largest = i;
        let heapSize = this.values.length;
        let heap = this.values;

        if(leftIndex < heapSize && heap[leftIndex] > heap[i]){
            largest = leftIndex;
        }

        if(rightIndex < heapSize && heap[rightIndex] > heap[largest]){ // DAMN SMART ALGORITHM. READ THIS LINE TWICE
            largest = rightIndex;
        }
        if(largest !== i){
            this.swap(i, largest);
            this.maxHeapify(largest);
        }
    }
}

let h = new MaxBinaryHeap();

h.insert(41);
h.insert(39);
h.insert(33);
h.insert(18);
h.insert(27);
h.insert(12);
h.insert(55);

// h.insert(12);
// h.insert(12);

console.log(h.values);

h.extractMaxRecursive();
console.log(h.values);