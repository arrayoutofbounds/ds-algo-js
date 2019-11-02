function binarySearch(arr, value){
    let start = 0; // left pointer
    let end = arr.length - 1; // right pointer
    let middle = Math.floor((start+end)/2); // middle pointer, round down since there can be even number of elements hence no middle element

    while(arr[middle] !== value && start <= end){
        if(value < arr[middle]){
            end = middle -1;
        }else {
            start = middle + 1;
        }
        middle = Math.floor((start+end)/2);
    }
    return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5],50));