// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalizeWord(word) {
//   return word.slice(0, 1).toUpperCase() + word.slice(1);
// }

// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((word) => capitalizeWord(word))
//     .join(" ");
// }

function capitalize(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
