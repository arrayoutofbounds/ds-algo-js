//max sum of n continous elements

// very bad.....
function maxSubarray(arr, n){
    if(n > arr.length) return null;

    let max = -Infinity; // as sum can be all negative

    for(let i = 0; i < arr.length - n + 1; i++){
        let temp = 0;
        for(let j = 0; j < n; j++){
            temp += arr[i+j];
        }

        if(temp > max){  // this is why -Infinity helps to ensure that -1 is not straight away cutting this code.
            max = temp;
        }
    }
    return max;
}

// much better
function maxSubarrayBetter(arr, n){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < n) return null;

    for(let i = 0; i< n; i++){ // create the first sum of n numbers
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // create sliding window
    for(let j = n; j < arr.length; j ++){
        tempSum = tempSum - arr[j-n] + arr[j];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}


console.log(maxSubarray([1,2,5,2,8,1,5],2)); //10
console.log(maxSubarrayBetter([1,2,5,2,8,1,5],2)) // 10