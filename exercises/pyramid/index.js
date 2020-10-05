// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   ' | 3 spaces, 1 #, 3 spaces (which is n - 1)
//       '  ###  ' | 2 spaces, 3 #'s, 2 spaces (which is n - 2)
//       ' ##### ' | 1 space, 5 #'s, 1 space (which is n - 3)
//       '#######' | 0 space, 7 #'s, 0 space (which is n - 4)

// *** SOLUTION 2 - USING MORE MATH ***

//   pyramid(4) n = 4
//       '   #   ' | row idx = 0; midpoint is at idx 3, # added at midpoint, no # added around 
//       '  ###  ' | row idx = 1; # - (at idx midpoint - 1 to midpoint + 1) 
//       ' ##### ' | row idx = 2; # - (at idx midpoint - 2 to midpoint + 2)
//       '#######' | row idx = 3; # - (at idx midpoint - 3 to midpoint + 3)

// how to find midpoint? 
// Math.floor((n * 2 - 1) / 2) or 3
// range of # added is from (midpoint - row idx) to (midpoint + row idx)
// length of each row is 7, which is n * 2 - 1

function pyramid(n) {
  // outer loop for each row
  for (let rowIdx = 0; rowIdx < n; rowIdx++) {
    let row = '';
    let rowLength = n * 2 - 1
    let midpoint = Math.floor(rowLength / 2);
    

    for (let columnIdx = 0; columnIdx < rowLength; columnIdx++) {
      let startIdx = midpoint - rowIdx;
      let endIdx = midpoint + rowIdx;

      row += (columnIdx >= startIdx && columnIdx <= endIdx) ? '#' : ' '
    }
    console.log(row)
  }
}



// *** SOLUTION 1 - ITERATIVE ***
// function pyramid(n) {

//   let spaceCount = n - 1;  // example first iteration: n = 4, therefore spaceCount = 3; spaceCount should incrementally decrease by 1, until it is 0
//   let hashCount = 1;

//   while (spaceCount >= 0) {
//     let spaces = '';
//     while (spaces.length < spaceCount) spaces += ' ';

//     let hashes = '';
//     while (hashes.length < hashCount) hashes += '#';

//     console.log(spaces + hashes + spaces)

//     spaceCount--;
//     hashCount += 2;
//   }
// }




module.exports = pyramid;
