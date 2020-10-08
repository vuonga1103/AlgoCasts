// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ITERATIVE SOLUTION
// function fib(n) {
//   const sequence = [0, 1];
//   if (n === 0 || n === 1) return sequence.indexOf(n);

//   let last = sequence[sequence.length - 1];
//   let nextToLast = sequence[sequence.length - 2];

//   while (sequence.length <= n) {
//     let next = last + nextToLast;
//     nextToLast = last;
//     last = next;

//     sequence.push(next)
//   }

//   return last
// }

// RECURSIVE SOLUTION

const cache = {};

function fib(n) {

  if (cache[n]) return cache[n];

  if (n < 2) {
    return n 
  } else {
    const result = fib(n - 1) + fib(n - 2);
    cache[n] = result;
    return result
  }
  
}

module.exports = fib;
