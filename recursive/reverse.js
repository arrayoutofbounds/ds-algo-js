function reverse(str){
    let result = '';

    function helper(s){
        if(s.length ===0){
            return '';
        }

        result = result + s[s.length-1];
        helper(s.slice(-(s.length),-1));
    }

    helper(str);
    return result;
}

console.log(reverse('awesome'));