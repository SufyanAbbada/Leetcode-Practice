// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

// Constraints:

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let incorrectPlacedElements = 0;
  const sortedHeights = JSON.parse(JSON.stringify(heights)).sort(
    (a, b) => a - b,
  );
  for (let i = 0; i < heights.length; i++)
    sortedHeights[i] !== heights[i] && incorrectPlacedElements++;
  return incorrectPlacedElements;
};

let heights = [1, 1, 4, 2, 1, 3]; // 3
// let heights = [5, 1, 2, 3, 4]; // 5
// let heights = [1, 2, 3, 4, 5]; // 0
// let heights = [1, 2, 3, 4, 5, 6]; // 0
// let heights = [6, 5, 4, 3, 2, 1]; // 6
// let heights = [100, 99, 98, 97, 96]; // 5
// let heights = [1, 2, 3]; // 0
// let heights = [5, 4, 3, 2, 1]; // 5
// let heights = [1, 1, 1, 1]; // 0
// let heights = []; // 0
// let heights = [1]; // 0
// let heights = [100]; // 0
// let heights = [50, 60, 40, 30]; // 4
// let heights = [1, 2, 3]; // 0
// let heights = [10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,]; // 22

console.log(heightChecker(heights));
