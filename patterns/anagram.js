function isAnagram (a,b){
  if(a.length !== b.length){
    return false;
  }

  let f1 = {};

  for(let i of a){
    f1[i] = (f1[i] || 0) + 1;
  }

  for(char of b){
    if(!f1[char]){
      return false;
    }else{
      f1[char] -= 1;
    }
  }
  return true;
}

console.log(isAnagram("rat", "tar"));
console.log(isAnagram("rat", "cat"));