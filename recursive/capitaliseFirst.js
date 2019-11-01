function capitaliseFirst(arr){
    const result = [];

    for(let i = 0; i< arr.length; i++){
        if(arr[0].length === 0) return '';
        
        let capital = arr[i][0].toUpperCase();
        let remaining = arr[i].slice(1);
        result.push(capital + remaining);

        return result.concat(capitaliseFirst(arr.slice(1)));
    }

    return result;
}

console.log(capitaliseFirst(['car', 'taco', 'banana']));