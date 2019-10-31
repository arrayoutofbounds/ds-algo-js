function maxSubarraySum(arr, value){
    if(arr.length < value) return null;;
    let temp = 0;
    let max = 0;

    for(let i = 0; i < value; i++){
        temp += arr[i];
    }

    max = temp;
    for(let j = value; j < arr.length; j++){
        temp = temp - arr[j-value] + arr[j];
        if(temp > max){
            max = temp
        }
    }
    return max;
}

console.log(maxSubarraySum([100,200,300,400],2)) // 700