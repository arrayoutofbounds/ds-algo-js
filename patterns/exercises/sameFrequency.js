function sameFrequency(n1, n2){
    n1 = n1.toString();
    n2 = n2.toString();
    
    if(n2.length !== n1.length) return false;

    let f1 = {};
    let f2 = {};
    
    for(let i of n1){
        f1[i] = (f1[i] || 0) + 1;
    }
    
    for(let j of n2){
        f2[j] = (f2[j] || 0) + 1;
    }
    
    for(let i in f1){
        if(!(i in f2)){
            return false;
        }

        if(f1[i] !== f2[i]){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(22, 222));