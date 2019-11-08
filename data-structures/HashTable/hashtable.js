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
// hash function always gives back same sized output given any input
// you cannot work backwards.

// hash function should be:
// 1. needs to be fast
// 2.dosent cluster outputs at a specific indices, but distributes uniformly.
// 3. deterministic -> every time we pass in one input it yields the same output every single time.
// we want it in O(1);


// hash('pink', 9); gets number out between 0-8 included.

