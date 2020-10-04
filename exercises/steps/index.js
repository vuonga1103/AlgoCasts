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

// function steps(n) {

  // *** SOLUTION 1 ***
  // create an outer loop that will print each row until the number of rows reaches 2 (n)
  // create an inner loop that will add #'s and spaces to a row

  // the first row (idx 0) will have 1 # (idx + 1), and the remainder are spaces, until the length reaches 2 (n)
  // the second row (idx 1) will have 2 # (idx + 2), and the remainder are spaces, until the length reaches 2 (n)

  // let rowCount = 0

  // while (rowCount < n) {
  //   rowCount += 1
  //   let row = '';

  //   while (row.length < rowCount) row += '#'
  //   while (row.length < n) row += ' '
  //   console.log(row)
  // }

  // *** SOLUTION 2 ***
  // for (let r = 0; r < n; r++) {
  //   let row = '';

  //   for (let h = 0; h <= r; h++) {
  //     row += "#"
  //   }

  //   for (let s = r + 1; s < n; s++) {
  //     row += ' '
  //   }

  //   console.log(row)
  // }
// }


// *** SOLUTION 3 - RECURSION ***

function steps(n, spaces = 0) {

  if (spaces === n) return;

  let result = '';
  let spacesAdded = 0;

  while (spacesAdded < spaces) {
    result += ' ';
    spacesAdded++
  } 
  
  while (result.length < n) result = '#' + result;
  
  steps(n, spaces + 1)

  console.log(result)
}


module.exports = steps;
