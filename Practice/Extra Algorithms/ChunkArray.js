/* 
--- Directions
Split an array into chunked arrays of a specific length

--- Examples
chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
*/

function chunkArray(arr, len) {
    // Init chunked arr
    const chunkedArr = [];

    // Set index
    let i = 0; 

    // Loop while index is less than the array length
    while(i < arr.length) {
        // Slice out from the index t othe index + the chunk length and push on to the chunked array
        chunkArray.push(arr.slice(i, i + len));
        // Increment by chunk length
        i += len;
    }

    return chunkedArr;
}
