function isAnagram (a,b){
  if(a.length !== b.length){
    return false;
  }

  let f1 = {};
  let f2 = {};

  for(let i of a){
    f1[i] = (f1[i] || 0) + 1;
  }

  for(let j of b){
    f2[j] = (f2[j] || 0) + 1;
  }

  for(let key in f1){
    if(!(key in f2)){
      return false;
    }

    if(!(f1[key] === f2[key])){
      return false;
    }
  }
  return true;
}

console.log(isAnagram("rat", "tar"));
console.log(isAnagram("rat", "cat"));