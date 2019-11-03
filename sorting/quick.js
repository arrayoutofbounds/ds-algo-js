function pivot(arr, start = 0, end = arr.length-1 ){
    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIndex++;
            let temp = arr[swapIndex];
            arr[swapIndex] = arr[i];
            arr[i] = temp;
        }
    }

    let temp = arr[start];
    arr[start] = arr[swapIndex];
    arr[swapIndex] = temp;
    return swapIndex;
}

// console.log(pivot([4,8,2,1,5,7,6,3]));

function quick(arr, left = 0, right = arr.length-1){
    // base condition, this means there is only 1 element left.
    if(left < right){
        let pivotIndex = pivot(arr, left, right);

        // left
        quick(arr,left,pivotIndex-1);

        // right
        quick(arr,pivotIndex+1, right);
    }
    
    return arr;
}

console.log(quick([4,8,2,1,5,7,6,3]));