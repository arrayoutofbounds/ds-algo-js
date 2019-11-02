// quite complex. refer to abdul bari on youtube
function buildPatternTable(pattern){
    const lps = [];
    const index = 0;

    for(let i = 1; i< pattern.length; i++){
        if(pattern[i] === pattern[index]){
            lps = index + 1;
            index++;
            i++; 
        }else{
            if(index !== 0){
                index = lps[index-1];
            }else{
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function kmp(text, pattern){
    let lps = buildPatternTable(pattern);
    let i = 0;
    let j = 0;

    while(i< text.length && j < pattern.length){
        if(text[i] === pattern[j]){
            i++;
            j++;
        } else{
            if(j !== 0){
                j = lps[j-1];
            }else{
                i++;
            }
        }
    }

    if(j === pattern.length){
        return true;
    }
    return false;
}

// abcbcglx
// bcgl

console.log(kmp("abcbcglx", "bcgl"));