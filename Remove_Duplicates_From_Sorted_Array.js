// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let elementToBePlaced = 1;
  let uniqueValues = 1;

  if (nums.length === 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      if (elementToBePlaced !== i) {
        nums[elementToBePlaced] = nums[i];
      }
      elementToBePlaced++;
      uniqueValues++;
    }
  }
  return uniqueValues;
};

let nums = [1, 1, 2]; // k = 2, [1,2,_]
// let nums = [0,0,1,1,1,2,2,3,3,4]  // k = 5, [0,1,2,3,4,_,_,_,_,_]
// let nums = [1,1,1,1]              // k = 1, [1,_,_,_]
// let nums = [1,2,3,4,5]            // k = 5, [1,2,3,4,5]
// let nums = [-3,-3,-2,-1,-1,0,0,1] // k = 5, [-3,-2,-1,0,1,_,_,_]
// let nums = [0,0,0,0]              // k = 1, [0,_,_,_]
// let nums = [5,7,11,11]            // k = 3, [5,7,11,_]
// let nums = []                     // k = 0, []
// let nums = [1]                     // k = 1, [1]
// let nums = [-100,-100]             // k = 1, [-100,_]
// let nums = [100,100,100]           // k = 1, [100,_,_]
// let nums = [3,5,6,7,9,9]           // k = 5, [3,5,6,7,9]

console.log(removeDuplicates(nums));
// removeDuplicates([1, 1, 1, 2, 3, 4]);
