function charCount(str){
    // make object to return
    let result = {};
    // loop over each char
    for (let i=0; i< str.length; i++){
        let char = str[i].toLowerCase();
        // if char is number/letter AND key is in object, add one to count
        if(result[char] > 0){
            result[char]++;
        }else{
            // if char is a number/letter AND key is NOT in object, add one to count
            result[char] = 1;
        }
        // if char is something else, ignore
    }
    // return object at end
    return result;
}


console.log(charCount("hello"));
console.log(charCount("Hi there!"));
