
function vowels(str) {
    let count = 0;
    const theVowels = 'aeiou';

    for (let char of str.toLowerCase()) {
        if (theVowels.includes(char)) {
            count++
        }
    }

    return count;
}
