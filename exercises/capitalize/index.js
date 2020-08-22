// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();

    for ( let i=1; i<str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;

// function capitalize(str) {
//     let result = str[0].toUpperCase();

//     for ( let i=1; i<str.length; i++) {
//         if (str[i-1] === ' ') {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }

// function capitalize(str) {
//     let words = [];
//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }

// function capitalize(str) {
//     str = str.split('');
//     let first = str[0].toUpperCase();
//     str.splice(0,1,first);
//     for (let i=0; i<str.length; i++) {
//       if (str[i-1] === ' ') {
//           let replaceWith = str[i].toUpperCase();
//             str.splice(i,1,replaceWith);
//         }
//     }
//     return str.join('');
// }
