// we are using a non number key
// computer does not know how to find something that is not an index in memory.
// hash tables can be used for that
// we are implementing hash table using an array
// in order to look up values by key, we need a way to convert keys into valid array indices.
// i.e 'pink' -> 0;
// functions that help us do that are hashing functions.

// pass in a string. pink -> 0.
// i.e have a 10 length array
// if we pass in a string, we need to get 0-9. 
// same input should get same output
// i.e pink -> 0, cyan -> 3
// then hashFunction(cyan) -> 3 all the time!
// we need the same number back all the time. 

// hash part
// hash function = function that converts keys into valid indices which are similar given same input.
// hash function always gives back same sized output given any inpu8t
// you cannot work backwards.

// hash function should be:
// 1. needs to be fast
// 2.dosent cluster outputs at a specific indices, but distributes uniformly.
// 3. deterministic -> every time we pass in one input it yields the same output every single time.
// we want it in O(1);


// hash('pink', 9); gets number out between 0-8 included so we can store it in a valid posirion,n


function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// console.log(hash('pink', 11));
// console.log(hash('cyan', 11));
// console.log(hash('blue', 11));
// console.log(hash('red', 11));
// console.log(hash('purple', 11));

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key){
        let index = this._hash(key);
        let value = this.keyMap[index];
        if(value){
            for(let i = 0; i < value.length; i++){
                if(value[i][0] === key) {
                    return value[i][1];
                }
            }
        }

        return undefined;
    }

    keys(){
        let keysArr = [];
        for(let i of this.keyMap){
            if(i){
                for(let j  of i){
                    if(!keysArr.includes(j[0])) keysArr.push(j[0]); // remove any duplicate values
                }
            }
        }
        return keysArr;
    }

    values(){
        let valuesArr = [];
        for(let i of this.keyMap){
            if(i){
                for(let j  of i){
                    if(!valuesArr.includes(j[1])) valuesArr.push(j[1]); // remove any duplicate values
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable();

ht.set('pink', '#a00000');
ht.set('dogs', 'i love them');
ht.set('hi', 'bye');
ht.set('hi', 'bye');

// console.log(ht.get("plum"));
// console.log(ht.get("hi"));
// console.log(ht.get("dogs"));

console.log(ht.values())
console.log(ht.keys())