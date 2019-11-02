// this is the naive search

// where a is the long string and b is the substring
function stringSearch(a,b){
    let count = 0;
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(a[i+j] !== b[j]) break;
            if(j === b.length - 1) count++;
        }
    }
    return count;
}

console.log(stringSearch("lorie loledlol", "lo"));