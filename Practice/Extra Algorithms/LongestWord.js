/*
--- Directions
Return the longest word of a string
If more than one longest word, put into an array

--- Examples
ex. longestWord('Hello, my name is Brad') === 'hello'
ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']
*/

function longestWord(sen) {
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    const sorted = wordArr.sort(function(a, b) {
        return b.length - a.length;
    });

    const longestWordArr = sorted.filter(function(word) {
        return word.length === sorted[0].length;
    });

    if (longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWrodArr;
    }
}