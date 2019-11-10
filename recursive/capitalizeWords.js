function capitalizedWords(arr){
    let result = [];

    function helper(a){
        if(!a.length) return;

        let capitalWord = a[0].toUpperCase();
        result.push(capitalWord);

        helper(a.slice(1));
    }

    helper(arr);
    return result;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']