// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // --- SOLUTION 1 ---
  // make copy of array to avoid mutating og array
  // splice the copyArr (0, size), push that spliced array into a new array, do this while the copyArray has a length
  // const copyArr = [...array];
  // const result = [];
  // while (copyArr.length) result.push(copyArr.splice(0, size));
  // return result;
  
  // --- SOLUTION 2 ---
  // make a container to hold the chunks
  // const chunked = [];
  // if the last "chunk" is nonexistent or if the last chunk's length is the same as size, push into chunked [element]
  // otherwise if the last chunk is existent and its lengthis not yet size, push the element into the last chunk
  // for (const elem of array) {
  //   const lastChunk = chunked[chunked.length - 1];
  //   if (!lastChunk || lastChunk.length === size) {
  //     chunked.push([elem]);
  //   } else {
  //     lastChunk.push(elem);
  //   }
  // }
  // return chunked;

  // --- SOLUTION 3 ---
  let index = 0;
  let chunked = [];

  // slice array from index to index + size, push into chunked, set new index to index + size
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }

  return chunked;
}

module.exports = chunk;

// NOTES
// .slice(x, y), returns elements from index x to index y (exclusive of index y element); doesn't mutate
// .splice(a, b), returns b elements starting from index a; mutates
