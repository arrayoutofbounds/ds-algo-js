// optimised with no swaps variable.
function bubble(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// optimised with no swaps variable.
function bubbleOptimised(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true; // assume this
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false; // when we make a swap, update it.
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubble([5,3,4,1,-2]));