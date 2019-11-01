function isPalindrome(str){
    let result = '';

    function helper(s){
        if(s.length ===0){
            return '';
        }

        result = result + s[s.length-1];
        helper(s.slice(-(s.length),-1));
    }

    helper(str);
    return str === result;
}

function isPalindrome2(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    
    if(str[0] === str.slice(-1)) {
        return isPalindrome2(str.slice(1,-1));
    }
    return false;
}


// console.log(isPalindrome('awesome'));
console.log(isPalindrome2('tacocat'));