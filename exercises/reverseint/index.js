// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // --- FIRST SOLUTION
  // let arr = n.toString().split(""); // turn the integer into a string, then into an array
  // let isNegative = n < 0; // if the integer is less than 0, then set var isNegative to true

  // let reversedStr = arr.reverse().join(""); // reverse the array & join the array into a str
  // if (isNegative) reversedStr = "-" + reversedStr; // add "-" in front of the str if n was negative
  // return parseInt(reversedStr); // turn the string into an integer

  // --- SECOND SOLUTION, using Math.sign(x), which returns -1, 1, or 0 according to the sign of the number
  let reversedStr = n.toString().split("").reverse().join("");
  return parseInt(reversedStr) * Math.sign(n);
}

module.exports = reverseInt;
