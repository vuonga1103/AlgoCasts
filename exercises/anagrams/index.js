// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// --- SOLUTION 1 ---
// function toLettersArr(string) {
//   // return string
//   //   .toLowerCase()
//   //   .split("")
//   //   .filter((char) => char.match(/[A-Za-z]/));

//   // or use .replace()
//   return string.toLowerCase().replace(/[^\w]/g, "").split("");
// }

// function anagrams(stringA, stringB) {
//   const charsArrA = toLettersArr(stringA);
//   const charsArrB = toLettersArr(stringB);
//   if (charsArrA.length !== charsArrB.length) return false;

//   const charCountObjA = {};
//   for (char of charsArrA) charCountObjA[char]++ || (charCountObjA[char] = 1);

//   for (char of charsArrB) {
//     const count = charsArrB.filter((c) => c === char).length;
//     if (count !== charCountObjA[char]) return false;
//   }

//   return true;
// }

// anagrams("hello", "llohe");

// --- SOLUTION 2 ---
// function strToCharMap(str) {
//   const charMap = {};
//   for (char of str.replace(/[^\w]/g, "")) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const charMapA = strToCharMap(stringA);
//   const charMapB = strToCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
//     return false;

//   for (char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) return false;
//   }

//   return true;
// }

// --- SOLUTION 3 ---

// function toSortedArr(string) {
//   return string.replace(/[^\w]/g, "").toLowerCase().split("").sort();
// }

// function anagrams(stringA, stringB) {
//   const arrA = toSortedArr(stringA);
//   const arrB = toSortedArr(stringB);

//   if (arrA.length !== arrB.length) return false;

//   // return JSON.stringify(arrA) === JSON.stringify(arrB);

//   for (let i = 0; i <= arrA.length; i++) {
//     if (arrA[i] !== arrB[i]) return false;
//   }

//   return true;
// }

// --- SOLUTION 4 ---
function cleanString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
