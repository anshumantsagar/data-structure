// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, stair='') {
  if ( n === row ) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row+1);
  }
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;

// function steps(n) {
//   for (let r=0; r<n; r++) {
//       let stairs = '';
//       for (let c=0; c<n; c++) {
//         if (c <= r) {
//           stairs += '#';
//         } else {                  
//           stairs += ' ';
//         }
//       }
//       console.log(stairs);
//     } 
// }
