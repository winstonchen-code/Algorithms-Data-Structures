/*
--- Directions
Given an integer, return an integer that is the reverse ordering of numbers.

--- Examples
reverseInt(15) === 51
reverseInt(981) === 189
reverseInt(500) === 5
reverseInt(-15) === -51
reverseInt(-90) === -9
*/

//Tip: The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative, or zero.
//Tip: toString(), Math.sign(), parseInt()

//Solution 1

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    if (n < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}

//Clean up of Solution 1

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}