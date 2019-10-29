// if unsorted input, then its hard to get an algorithm.
// small are start and large at the end
// naieve solution - n^2


// pointer solution
// start from either suide and try add them to 0
// this is O(n)

function sumZero (arr) {
    let left = 0;
    let right = arr.length -1 ;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0 ){
            return [arr[left, arr[right]]]
        }else if( sum < 0 ){
            right--;
        }else{
            left++;
        }
    }
}