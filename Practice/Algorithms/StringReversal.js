/*
--- Directions
Given a string, return a new string with the reversed order of characters.

--- Examples
reverse('apple') === 'leppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniteerG'
*/

//Tip: The reverse() method reverses an array in place. 

//Solution 1

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

//Clean up of Solution 1

function reverse(str) {
    return str.split('').reverse().join('');
}

//Solution 2 (For Loop)

function reverse(str) {
    const arr = str.split('');
}

//Solution 3 (Array Helper)