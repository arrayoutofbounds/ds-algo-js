function charCount(str) {
  // make object to return
  let result = {};
  // loop over each char
  for (let char of str) {
    // check if alpha numeric
    if (isAlphaNumeric(char)) {
        char = char.toLowerCase();
      // if char is number/letter AND key is in object, add one to count
      if (result[char] > 0) {
        result[char]++;
      } else {
        // if char is a number/letter AND key is NOT in object, add one to count
        result[char] = 1;
      }
    }
    // if char is something else, ignore
  }
  // return object at end
  return result;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt();
    if(!(code>47 && code <58) && !(code>64 && code <91) && !(code >96 && code < 123)) {
        return false;
    }
    return true;
}

console.log(charCount('hello'));
// console.log(charCount('Hi there!'));
// console.log(charCount("123123a"));