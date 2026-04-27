// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
};

let nums = [0, 1, 0, 3, 12]; // [1,3,12,0,0]
// let nums = [0]                    // [0]
// let nums = [1, 2, 3, 4, 5]; // [1,2,3,4,5]
// let nums = [0,0,0,0]              // [0,0,0,0]
// let nums = [4,0,5,0,3,0,1]        // [4,5,3,1,0,0,0]
// let nums = [0,1,2,0,0,3,4]        // [1,2,3,4,0,0,0]
// let nums = [-1,0,-2,0,-3]         // [-1,-2,-3,0,0]
// let nums = [0,0,1]                // [1,0,0]
// let nums = []                     // []
// let nums = [1]                    // [1]
// let nums = [0,1]                  // [1,0]
// let nums = [1,0]                  // [1,0]
// let nums = [0,0,0,1]              // [1,0,0,0]
// let nums = [1,2,0,0,0]            // [1,2,0,0,0]

moveZeroes(nums);
