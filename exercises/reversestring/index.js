// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //      FIRST SOLUTION
  // let result = [];
  // str.split('').forEach(char => result.unshift(char));
  // return result.join('');
  //      SECOND SOLUTION
  // let result = "";
  // for (let i = str.length - 1; i >= 0; i++) {
  //   result += str[i];
  // }
  // return result;
  //      THIRD SOLUTION
  // return str.split('').reverse().join('')
  //      FOURTH SOLUTION
  // return str.split("").reduce((acc, currentVal) => currentVal + acc, "");
}

module.exports = reverse;
