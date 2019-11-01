function collectOdds(nums){ // array input
    let result = []; // odd values
    
    function helper(helperInput){
        if(helperInput.length === 0 ){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1)); // returns new array, ignoring the first input as that is already processed. SPLICE 
    }

    helper(nums);

    return result;
}

console.log(collectOdds([1,2,3,4,5,6,7,8,9]));