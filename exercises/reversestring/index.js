// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let newStr = str.split('');
    newStr = newStr.reverse();
    newStr = newStr.join('');
    return newStr
}

module.exports = reverse;
