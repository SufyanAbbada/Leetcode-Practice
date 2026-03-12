// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let negativeNumbers = nums.filter((number) => number < 0);
  let positiveNumbers = nums.filter((number) => number >= 0);

  let negativeNumbersLength = negativeNumbers.length;
  let positiveNumbersLength = positiveNumbers.length;

  let negativeCounter, positiveCounter;

  if (negativeNumbersLength > 0) {
    negativeNumbersSquared = negativeNumbers.map(
      (negativeNumber) => negativeNumber ** 2,
    );
    negativeCounter = negativeNumbersSquared.length - 1;
  }

  if (positiveNumbersLength > 0) {
    positiveNumbersSquared = positiveNumbers.map(
      (positiveNumber) => positiveNumber ** 2,
    );
    positiveCounter = 0;
  }

  if (negativeNumbersLength === 0) {
    return positiveNumbersSquared;
  } else if (positiveNumbersLength === 0) {
    return negativeNumbersSquared.reverse();
  } else {
    let sortedArray = [];
    for (let i = 0; i < nums.length; i++) {
      if (
        positiveNumbersSquared[positiveCounter] == undefined ||
        positiveNumbersSquared[positiveCounter] >=
          negativeNumbersSquared[negativeCounter]
      ) {
        sortedArray[i] = negativeNumbersSquared[negativeCounter];
        negativeCounter--;
      } else {
        sortedArray[i] = positiveNumbersSquared[positiveCounter];
        positiveCounter++;
      }
    }
    return sortedArray;
  }
};
