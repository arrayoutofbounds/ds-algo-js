function productOfArray(arr){
    let result = 1;

    function helper(h){
        if(h.length === 0 ){
            return 1;
        }

        result = result * h[0];
        helper(h.slice(1));
    }

    helper(arr);
    return result;
}

console.log(productOfArray([1,2,3]));