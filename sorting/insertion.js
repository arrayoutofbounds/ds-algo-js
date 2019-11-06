function insertion(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i-1; // mark the first element as sorted.
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertion([2,1,9,76,4]));