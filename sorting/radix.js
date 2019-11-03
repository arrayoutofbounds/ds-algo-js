function getDigit(num,place){
    return Math.floor(Math.abs(num) / Math.pow(10,place)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let max = 0;
    for(let a of nums){
        max = Math.max(max, digitCount(a));
    }
    return max;
}

function radix(nums){
    let maxDigits = mostDigits(nums);

    for(let i = 0; i < maxDigits; i++){
        let digitBuckets = Array.from({length: 10}, () => []); // create array of 10 sub arrays.
        for(let k = 0; k < nums.length; k++){
            let digit = getDigit(nums[k], i);
            digitBuckets[digit].push(nums[k]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radix([23,345, 5467, 12, 2345, 9852]));