function recursiveRange(n){ // adds from 0 to n
    let answer = 0;

    if(n === 0){
        return 0;
    }

    answer = n + recursiveRange(n-1);
    return answer;
}

console.log(recursiveRange(6));