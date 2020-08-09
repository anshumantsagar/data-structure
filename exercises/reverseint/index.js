// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverse = require("../reversestring");

function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//     let newN = n.toString();
//     newN =  newN.split('');
//     let neg = false;
//     let reversedN = [];
//     if (newN[0] === '-') {
//       neg = true;
//       newN.splice(0,1);
//     }
//     for (let elem of newN) {
//         if ( elem === '0' || 0) {
//             newN.splice(elem,1);
//         }
//         else {
//           reversedN.push(elem);
//         }
//     }
//     if (neg === true ) {
//       reversedN.push('-');
//     }
//     return Number(reversedN.reverse().join(''));
//     // i know it has a flaw this it will not treat correctly any number which has '0' in between 
//     // but it passed all the test case written so i put it here
// }

// function reverseInt(n) {
//     const reversed = n
//         .toString()
//         .split('')
//         .reverse()
//         .join('');
    
//     if( n < 0 ) {
//         return parseInt(reversed) * -1;
//     }

//     return parseInt(reversed);
// }
