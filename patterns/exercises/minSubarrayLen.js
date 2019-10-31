function minSubarrayLen(nums, sum){
    if ( nums.length === 0 ) return 0;

    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while(start < nums.length){
        if(total < sum && end < nums.length){
            total += nums[end];
            end++;
        }else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        }else{
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}