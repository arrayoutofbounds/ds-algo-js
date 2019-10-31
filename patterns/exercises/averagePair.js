function averagePair (arr, target) {
    if(arr.length === 0) return false;
    if(arr.length === 1 && arr[0] !== target) return false;
    
    let i = 0;
    let j = arr.length-1;
    while(j > i){
        let tempAverage = (arr[j] + arr[i])/2;
        if(tempAverage === target){
            return true;
        }else if(tempAverage > target){
            j--;
        }else{
            i++;
        }
    }
    return false;
}

console.log(averagePair([1,2,3],2.5));
console.log(averagePair([],4));