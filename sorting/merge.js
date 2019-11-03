// assume a and b are sorted arrays
function merge(a,b){
    let result = [];
    let i = 0 ,j = 0;

    while( i < a.length && j < b.length ){
        if(b[j] > a[i]){
            result.push(a[i]);
            i++;
        }else{
            result.push(b[j]);
            j++;
        }
    }
    result = result.concat(a.slice(i)).concat(b.slice(j));
    return result;
}

function mergeSort(arr){
    // split into smaller arrays
    // call mergesort on them until length of array is 1 or 0.
    
    // base case for recursion
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([1,10,50,2,14,99,100]));