// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCount = {};
  for (char of str) charCount[char] ? ++charCount[char] : (charCount[char] = 1);

  // ----- FIRST SOLUTION:
  // let mostRepeatedChar;
  // let highestRepeat = 0;
  // for (key in charCount) {
  //   if (charCount[key] > highestRepeat) {
  //     highestRepeat = charCount[key];
  //     mostRepeatedChar = key;
  //   }
  // }
  // return mostRepeatedChar;

  // ----- SECOND SOLUTION:
  const arr = [];
  for (key in charCount) arr.push([key, charCount[key]]);
  arr.sort((a, b) => b[1] - a[1]);
  return arr[0][0];
}

module.exports = maxChar;
