// assume a and b are sorted arrays
function merge(a,b){
    let result = [];
    let i = 0 ,j = 0;

    while( i < a.length && j < b.length ){
        if(b[j] > a[i]){
            result.push(a[i]);
            i++;
        }else{
            result.push(b[j]);
            j++;
        }
    }
    result = result.concat(a.slice(i)).concat(b.slice(j));
    return result;
}

console.log(merge([1,10,50], [2,14,99,100]));