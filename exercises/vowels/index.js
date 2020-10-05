// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// --- SOLUTION 1 ---
// function vowels(str) {
//   const VOWELS = 'aeiouAEIOU';

//   return str.split('').reduce((numVowels, char) => { 
//     return (VOWELS.includes(char)) ? numVowels + 1 : numVowels
//   }, 0)
// }

// --- SOLUTION 2 via REG EX ---
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0
}

module.exports = vowels;
