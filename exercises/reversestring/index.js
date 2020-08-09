// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, elem) => elem + reversed);
}

module.exports = reverse;

// function reverse(str) {
//     let newStr = str.split('').reverse().join('');
//     return newStr;
// }

// function reverse(str) {
//     let reversed = '';

//     for (let elem of str) {
//         reversed = elem + reversed;
//     }

//     return reversed;
// }
