/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    if(!n) return false;
    
    let binaryNumber = n.toString(2);
    let i = 0;
    let j = i + 1; 

    while(i < j && j < binaryNumber.length){
        if(binaryNumber[i] === binaryNumber[j]){
            return false;
        }
        i++;
        j++;
    }
    return true;
};

console.log(hasAlternatingBits(5));