// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {

//   // Create an array with n number of subarrays, within each subarray is n number of elements, initially set to empty string
//   let result = []

//   for (let subArrIdx = 0; subArrIdx < n; subArrIdx++) {
//     let subArr = [];
//     for (let i = 0; i < n; i ++) subArr.push('')
//     result.push(subArr)
//   }

//   let currentPosition = [0, 0];
//   let currentNum = 1

//   // Create helper functions that takes in a rowIdx, and a columnIdx, and fill up the result array in a particular direction starting at that position

//   const fillRight = ([rowIdx, columnIdx]) => {
//     let row = result[rowIdx];
//     let startingColumnIdx = result[rowIdx][columnIdx] ? columnIdx + 1 : columnIdx
//     let num = currentNum
//     let endingColumnIdx;

//     for (let i = startingColumnIdx; i < row.length; i++) {
//       if (result[rowIdx][i]) break;

//       endingColumnIdx = i;
//       result[rowIdx][i] = num; 
//       num ++;
//     }

//     currentPosition = [rowIdx, endingColumnIdx]
//     currentNum = num
//   }

//   const fillDown = ([rowIdx, columnIdx]) => {
//     let startingRowIdx = rowIdx + 1;
//     let num = currentNum;
//     let endingRowIdx;

//     // Loop through each row of result, starting at startingRowIdx
//     for (let i = startingRowIdx; i < result.length; i++) {
      
//       if (result[i][columnIdx]) break;

//       endingRowIdx = i;
//       result[i][columnIdx] = num;
//       num ++
//     }

//     currentPosition = [endingRowIdx, columnIdx]
//     currentNum = num;
//   }

//   const fillLeft = ([rowIdx, columnIdx]) => {
//     let row = result[rowIdx];
//     let startingColumnIdx = columnIdx - 1;
//     let num = currentNum;
//     let endingColumnIdx;

//     for (let i = startingColumnIdx; i >= 0; i--) {
      
//       if (result[rowIdx][i]) break;

//       endingColumnIdx = i;
//       result[rowIdx][i] = num;
//       num++;
//     }

//     currentPosition = [rowIdx, endingColumnIdx]
//     currentNum = num
//   }

//   const fillUp = ([rowIdx, columnIdx]) => {
//     let startingRowIdx = rowIdx - 1;
//     let num = currentNum;
//     let endingRowIdx;

//     for (let i = startingRowIdx; i >= 0; i--) {
//       if (result[i][columnIdx]) break;

//       endingRowIdx = i;
//       result[i][columnIdx] = num;
//       num ++
//     }

//     currentPosition = [endingRowIdx, columnIdx]
//     currentNum = num;
//   }

//   // // Create an array to store helper functions
//   let helperFunctions = [fillRight, fillDown, fillLeft, fillUp]

//   function resultIsFilled() {
//     for (let subArrIdx = 0; subArrIdx < result.length; subArrIdx++) {
//       const subArr = result[subArrIdx]
//       for (let i = 0; i < subArr.length; i++) {
//         const elem = subArr[i];
//         if (!elem) return false;
//       }
//     }
//     return true;
//   }

//   let x = 0;

//   while (!resultIsFilled()) {
//     helperFunctions[x](currentPosition)
//     if (x === 3) {
//       x = 0
//     } else {
//       x++ 
//     }
//   }

//   return result 
// }


// A BETTER SOLUTION
function matrix(n) { 
  const results = [];

  // Add n subarrays to results
  for (let i = 0; i < n; i++) results.push([])

  let startColIdx = 0;
  let endColIdx = n - 1;
  let startRowIdx = 0;
  let endRowIdx = n - 1;
  let count = 1;

  while (startColIdx <= endColIdx && startRowIdx <= endRowIdx) {
    // Loop responsible for adding numbers from left to right
    for (let i = startColIdx; i <= endColIdx; i++) {
      results[startRowIdx][i] = count;
      count ++
    }

    startRowIdx++;

    // Loop responsible for adding numbers from top to bottom
    for (let i = startRowIdx; i <= endRowIdx; i++) {
      results[i][endColIdx] = count;
      count ++
    }

    endColIdx--;

    // Loop responsible for adding numbers from right to left

    for (let i = endColIdx; i >= startColIdx; i--) {
      results[endRowIdx][i] = count;
      count ++
    }

    endRowIdx--;

    // Loop responsible for adding numbers from bottom to top

    for (let i = endRowIdx; i >= startRowIdx; i--) {
      results[i][startColIdx] = count;
      count ++
    }

    startColIdx++;
  }

  
  return results
}

matrix(5)


module.exports = matrix;


