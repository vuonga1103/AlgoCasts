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


// *** SOLUTION 1 - ITERATIVE ***
function pyramid(n) {

  let spaceCount = n - 1;  // first iteration: spaceCount = 3 ; spaceCount should incrementally decrease by 1, until it is 0
  let hashCount = 1;

  while (spaceCount >= 0) {

    let spaces = '';
    while (spaces.length < spaceCount) spaces += ' ';

    let hashes = '#';
    while (hashes.length < hashCount) hashes += '#';

    console.log(spaces + hashes + spaces)

    spaceCount--;
    hashCount += 2;
  }
}

module.exports = pyramid;
