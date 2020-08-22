// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMaps(stringA);
//     const bCharMap = buildCharMaps(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (let char in aCharMap) {
//         if(aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
    
// }

// buildCharMaps = (str) => {
//     const charMap = {};
//     for (let elem of str.replace(/[^\w]/g,"").toLowerCase()) {
//         if ( !charMap[elem] ) {
//             charMap[elem] = 1;
//         } else {
//             charMap[elem]++;
//         }
//         //or it can be written as
//         //charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// function anagrams(stringA, stringB) {
//     stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
//     stringB = stringB.replace(/[^\w]/g,"").toLowerCase();
//     const aChar = {};
//     const bChar = {};
//     let itIsOrNot = false;
//     if ( stringA.length !== stringB.length ) {
//         return itIsOrNot;
//     }
//     for ( let char of stringA) {
//       if(!aChar[char]) {
//         aChar[char] = 1;
//       } else {
//         aChar[char]++;
//       }
//     }
//     for ( let char of stringB) {
//       if (!bChar[char]) {
//         bChar[char] = 1;
//       } else {
//         bChar[char]++;
//       }
//     }
//     for (let elem in bChar) {
//       if (aChar[elem] === bChar[elem]) {
//         itIsOrNot = true;
//       } else {
//         itIsOrNot = false;
//       }
//     }
//     return itIsOrNot;
// }
