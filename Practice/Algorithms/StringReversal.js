/* 
Given a string, return a new string with the reversed order of characters.

Examples:

reverse('aaple') === 'leppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniterrG'
*/

function reverse(str) {
    return str.split('').reverse().join('') 
}
