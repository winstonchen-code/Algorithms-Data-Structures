/*
--- Directions
Take an array of arrays and flatten to a single array

--- Example
ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
*/


//Solution 1

function flattenArray(arrays) {
    return arrays.reduce(function(a, b) {
        return a.cacat(b);
    });    
} 