/*
--- Directions
Remove from the array whatever is in the following arguments. Return the leftover value in an array

--- Example
seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
*/

// Solution 1

function seekAndDestroy() {
    const args = Array.from(arguments);

    function filterArr(arr) {
        return args.indexOf(arr) === -1;
    }

    return arr.filter(filterArr);
}