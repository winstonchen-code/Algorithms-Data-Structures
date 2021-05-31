/*
--- Directions
Given a string, return a new string with the reversed order of characters.

--- Examples
reverse('apple') === 'leppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniteerG'
*/

//Tip: The reverse() method reverses an array in place.
//Tip: Reduce helper

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
    let reversed = '';

    // for (var i = 0; i < str.length; i++)
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

//Solution 3 (Array Helper)

function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

//Clean up of Solution 3

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}