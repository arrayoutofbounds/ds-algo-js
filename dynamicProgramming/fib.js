// function fib(n){
//     if(n <= 2) return 1; // first 2 fib numbers are 1
//     return fib(n-1) + fib(n-2);
// }

// 1,1,2,3,5,8,13,21..

//memoization
function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];

    if(n <= 2) return 1; // first 2 fib numbers are 1

    let result = fib(n-1, memo) + fib(n-2,memo)
    memo[n] = result;
    return result;
}


// much better space complexity than memoization above
function fibTabulation(n){
    if(n <= 2) return 1;

    let fibNums = [0,1,1];
    for(let i=3; i <=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

console.log(fibTabulation(100));