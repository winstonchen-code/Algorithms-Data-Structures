/*
--- Directions
Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed.

--- Examples 
palindrome("abba") === true
palindrome("abcdefg") === false
*/

//Solution 1

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

//Solution 2 (Every Array Helper) 

//Discussion: Not an ideal solution for this problem since it is essentially doing twice as much work

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

