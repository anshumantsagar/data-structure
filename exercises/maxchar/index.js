// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxChar = '';
    for (let char of str ) {
        if (!chars[char]) {
            chars[char] = 1;
        } else {
            chars[char]++;
        }
    }; 
    for (let elem in chars) {
        if (chars[elem] > max) {
            max = chars[elem];
            maxChar = elem;
        }
    }
    return maxChar;
}

module.exports = maxChar; 
