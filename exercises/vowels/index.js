// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.matches(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//     let count = 0;
//     const checker = ['a','e','i','o','u'];
    
//     for ( let elem of str.toLowerCase() ) {
//         console.log(elem);
//         if ( checker.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// function vowels(str) {
//     const newStr = str.toLowerCase().split('');
//     let numOfVowels = 0;
//     for ( let elem of newStr ) {
//         console.log(elem);
//         if ( elem === 'a' ||
//             elem === 'e' ||
//             elem === 'i' ||
//             elem === 'o' ||
//             elem === 'u') {
//         numOfVowels++;
//         }
//     }
//     return numOfVowels;
// }
