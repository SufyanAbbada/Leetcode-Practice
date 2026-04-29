// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let swapOddWithEven = false;
  let swapEvenWithOdd = false;
  while (i < j) {
    if (nums[i] % 2 !== 0) swapOddWithEven = true;

    if (nums[j] === 0 || nums[j] % 2 === 0) swapEvenWithOdd = true;

    if (swapOddWithEven && swapEvenWithOdd) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      swapOddWithEven = swapEvenWithOdd = false;
    }

    !swapOddWithEven && i++;
    !swapEvenWithOdd && j--;
  }
  if (swapOddWithEven) [nums[i + 1], nums[j]] = [nums[j], nums[i + 1]];

  if (swapEvenWithOdd) [nums[i], nums[j]] = [nums[j], nums[i]];

  return nums;
};

let nums = [3, 1, 2, 4]; // [2,4,3,1] (any valid order)
// let nums = [0]                  // [0]
// let nums = [1,3,5,7]            // [1,3,5,7]
// let nums = [2, 4, 6, 8]; // [2,4,6,8]
// let nums = [0, 1, 2, 3, 4, 5]; // [0,2,4,1,3,5]
// let nums = [5,4,3,2,1,0]        // [4,2,0,5,3,1]
// let nums = [2,1]                // [2,1]
// let nums = [1,2]                // [2,1]
// let nums = []                   // []
// let nums = [1]                  // [1]
// let nums = [2]                  // [2]
// let nums = [0,0,1,1]            // [0,0,1,1]
// let nums = [1,1,1,1]            // [1,1,1,1]
// let nums = [2,2,2,2]            // [2,2,2,2]
// let nums = [0, 1, 2]; // [0,2,1]
// let nums = [2, 1, 4, 3, 6, 5]     // [2,4,6,1,3,5]
// let nums = [0, 2, 4, 6, 8, 10]    // [0,2,4,6,8,10]
// let nums = [1, 3, 5, 7, 9]        // [1,3,5,7,9]
// let nums = [1, 2, 3, 4, 5, 6]     // [2,4,6,1,3,5]
// let nums = [10, 7, 3, 4, 2, 6]; // [10,4,2,6,7,3]
// let nums = [6, 7]                 // [6,7]
// let nums = [1, 2, 3, 4]           // [2,4,3,1]
// let nums = [10, 20, 30, 40]       // [10,20,30,40]
// let nums = [9, 8, 7, 6]           // [8,6,7,9]
// let nums = []                     // []
// let nums = [1]                     // [1]
// let nums = [0]                     // [0]
// let nums = [0, 0, 1, 1]            // [0,0,1,1]
// let nums = [1, 1, 1, 1]            // [1,1,1,1]
// let nums = [2, 2, 2, 2]            // [2,2,2,2]
// let nums = [5, 7, 3, 9]            // [5,7,3,9]
// let nums = [0, 2, 4]               // [0,2,4]
// let nums = [1, 0]                  // [0,1]

console.log("Result: ", sortArrayByParity(nums));
