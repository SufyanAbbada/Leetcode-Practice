// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (nums1.length === 0 && nums1.length > 0) {
    nums1 = nums2;
  }

  let i = m - 1,
    j = n - 1,
    k = n + m - 1;
  while (i >= -1 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

// console.log("Result:", merge([1, 2, 0, 0, 0], 2, [1, 2, 3, 4, 5], 5))

// Test Case 1:
// console.log("Result:", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// (Expected output: [1, 2, 2, 3, 5, 6])
// Test Case 2:
// console.log("Result:", merge([1], 1, [], 0))
// (Expected output: [1])
// Test Case 3:
// console.log("Result:", merge([0],0,[1],1))
// (Expected output: [1])
// Test Case 4:
// console.log("Result:", merge([1, 3, 5, 0, 0, 0],3,[2, 4, 6],3))
// (Expected output: [1, 2, 3, 4, 5, 6])
// Test Case 5:
// console.log("Result:", merge([1, 4, 5, 6, 0, 0],4,[2, 3],2))
// (Expected output: [1, 2, 3, 4, 5, 6])

// Test Case 1:
// console.log("Result:", merge([], 0, [1], 1))
// (Expected output: [1])
// Test Case 2:
// console.log("Result:", merge([0, 0, 0, 0],0,[1, 2, 3, 4],4))
// (Expected output: [1, 2, 3, 4])
// Test Case 3:
// console.log("Result:", merge([10, 15, 20, 0],3,[5],1))
// (Expected output: [5, 10, 15, 20])
// Test Case 4:
// console.log("Result:", merge([3, 5, 7, 0, 0, 0], 3, [2, 8, 10], 3))
// (Expected output: [2, 3, 5, 7, 8, 10])
// Test Case 5:
console.log("Result:", merge([1, 0, 0, 0], 1, [2, 3, 4], 3));
// (Expected output: [1, 2, 3, 4, 0])
