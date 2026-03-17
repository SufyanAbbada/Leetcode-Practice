// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

let array = [1, 0, 2, 3, 0, 4, 5, 0]; // [1,0,0,2,3,0,0,4]
// let array = [1,2,3]                  // [1,2,3]

// let array = [0,1,2,3,4,5]            // [0,0,1,2,3,4]
// let array = [1,2,3,4,0]              // [1,2,3,4,0]
// let array = [0, 0, 1, 2, 3]; // [0,0,0,0,1]
// let array = [1,0,0,2,3]              // [1,0,0,0,0]
// let array = [0,1,0,1,0,1]            // [0,0,1,0,0,1]

// let array = []                       // []
// let array = [0]                      // [0]
// let array = [1]                      // [1]
// let array = [0,0,0,0]                // [0,0,0,0]
// let array = [1,1,1,1]                // [1,1,1,1]
// let array = [0,1]                    // [0,0]
// let array = [1,0]                    // [1,0]

// console.log("Array Given", array);
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 0) {
//     array = array
//       .slice(0, i)
//       .concat(0, 0, array.slice(i + 1, array.length))
//       .slice(0, array.length);
//     i = i + 1;
//   }
// }
// console.log("Array Result", array);

console.log("Array Given", array);
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    for (let j = array.length - 1; j > i; j--) {
      array[j] = array[j - 1];
    }
    array[i] = 0;
    ++i;
  }
}

console.log("Array Result", array);
