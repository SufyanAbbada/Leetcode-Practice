// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === val && nums[j] !== val) {
      nums[i] = nums[j];
      i++;
      j--;
    } else if (nums[i] !== val) i++;
    else if (nums[j] === val) j--;
  }
  return i;
};

// let nums = [3,2,2,3]
// let val = 3          // k = 2, [2,2,_,_]
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2; // k = 5, [0,1,4,0,3,_,_,_]

// let nums = [1,2,3,4,5]
// let val = 6        // k = 5, [1,2,3,4,5]
// let nums = [2,2,2,2]
// let val = 2          // k = 0, [_,_,_,_]
// let nums = [2,1,2,1,2,1]
// let val = 2      // k = 3, [1,1,1,_,_,_]
// let nums = [0,0,0,1]
// let val = 0          // k = 1, [1,_,_,_]
// let nums = [4,5]
// let val = 4              // k = 1, [5,_]
// let nums = [5,4]
// let val = 4              // k = 1, [5,_]

// let nums = []
// let val = 1                 // k = 0, []
// let nums = [1]
// let val = 1                // k = 0, [_]
// let nums = [1]
// let val = 2                // k = 1, [1]
// let nums = [2,3,4,5]
// let val = 2          // k = 3, [3,4,5,_]
// let nums = [2,3,4,5]
// let val = 5          // k = 3, [2,3,4,_]

console.log("Result: ", removeElement(nums, val));
