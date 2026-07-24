// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = nums[0];
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    }
    if (nums[i] < first && nums[i] > second) {
      third = second;
      second = nums[i];
    }
    if (nums[i] < first && nums[i] < second && nums[i] > third) {
      third = nums[i];
    }
  }
  return third !== -Infinity ? third : first;
};

// let nums = [3, 2, 1]; // 1
// let nums = [1, 2]; // 2
// let nums = [2,2,3,1]                       // 1
// let nums = [1,2,2,5,3,5]                   // 2
// let nums = [5,4,3,2,1]                     // 3
// let nums = [1,1,2,2,3,3]                   // 1
// let nums = [-1,-2,-3]                      // -3
// let nums = [-1,-1,-2]                      // -1
// let nums = [10,9,8,7,6,5]                  // 8
// let nums = [2,3,3,1]                       // 1
// let nums = [1,2,3,4]                       // 2
// let nums = [0,-1,-2,-3]                    // -2
// let nums = [100,100,99,98]                 // 98
// let nums = [1]                             // 1
// let nums = [2,2]                           // 2
// let nums = [1,1,1]                         // 1
// let nums = [-2147483648,1,2]               // -2147483648
// let nums = [-2147483648,-2147483648,1,2]   // -2147483648
// let nums = [2147483647,2147483646,2147483645] // 2147483645
// let nums = [2147483647]                    // 2147483647

console.log(thirdMax(nums));
