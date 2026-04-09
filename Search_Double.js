// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

// Constraints:

// 2 <= arr.length <= 500
// -103 <= arr[i] <= 103

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let store = {};
  for (let i = 0; i < arr.length; i++) {
    store[arr[i]] = store[arr[i]] + 1 || 1;
    if (arr[i] === 0 && store[arr[i]] > 1) return true;
    else if (arr[i] !== 0 && (store[arr[i] * 2] || store[arr[i] / 2]))
      return true;
  }
  return false;
};

let arr = [10, 2, 5, 3]; // true
// let arr = [3, 1, 7, 11]; // false
// let arr = [0, -2, 2]; // false

// let arr = [0, 0]; // true
// let arr = [0, 1, 2, 3]; // true
// let arr = [-2, -4]; // true
// let arr = [-10, -5, -3]; // true
// let arr = [1, 3, 9, 18]; // true
// let arr = [2, 4, 8, 16, 32]; // true
// let arr = [1, 2, 4, 7, 11]; // true
// let arr = [5, 7, 11, 13]; // false

// let arr = [1, 1, 1, 1]; // false
// let arr = [2]; // false
// let arr = [1000, -1000, 500]; // true
// let arr = [-1, -2, -4, -8]; // true
// let arr = [3, 6, 12, 24, 48]; // true

console.log(checkIfExist(arr));
