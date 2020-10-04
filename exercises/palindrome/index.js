// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // compare the first letter to the last letter
  // compare the second letter to the second to last letter
  // etc.
  // if the two letters are not the same return false
  // if they are the same, keep going
  // return true if reached the middle of the string and things checked out

  // --- FIRST SOLUTION
  // for (let i = 0; i < Math.ceil(str.length / 2); i++) {
  //   let currentLetter = str[i];
  //   let compareLetter = str[str.length - 1 - i];
  //   if (currentLetter !== compareLetter) return false;
  // }
  // return true;

  // --- SECOND SOLUTION
  return str.split("").every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

module.exports = palindrome;
