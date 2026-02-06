// 1. Array Basics

// Problem: Find the maximum number in an array of integers.

let array1 = [34, 58, 7, 22, 91, 13];
// let array1 = [9, 84, 65, 41, 53, 29, 72]
// let array1 = [12, 45, 67, 88, 23, 4, 15]
// let array1 = [51, 33, 29, 77, 98, 65, 9, 20]
// let array1 = [41, 62, 18, 83, 11, 40, 92, 56, 32]
// let array1 = [17, 53, 29, 3, 10, 48]
// let array1 = [99, 51, 18, 31, 62, 11, 74]
// let array1 = [27, 54, 65, 88, 9, 12, 41, 75]
// let array1 = [62, 19, 34, 77, 43, 58]
// let array1 = [82, 16, 59, 34, 67, 25]

// let max = array1[0];
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] > max) max = array1[i];
// }
// console.log(max);

// 2. Sum of Two Elements

// Problem: Given an array of integers, find two numbers that add up to a specific target.

let array2 = [2, 7, 11, 15];
let target = 9;
// let array2 = [1, 3, 5, 7, 9]; let target = 10;
// let array2 = [4, 6, 10, 15, 3, 8]; let target = 13
// let array2 = [5, 2, 7, 3, 11, 9]; let target = 12
// let array2 = [1, 5, 8, 3, 7]; let target = 10
// let array2 = [10, 2, 15, 7, 3]; let target = 17
// let array2 = [9, 4, 6, 2]; let target = 8
// let array2 = [10, -1, -2, 5, 6]; let target = 4
// let array2 = [14, 3, 8, 2, 1]; let target = 10
// let array2 = [12, 4, 7, 9, 5]; let target = 14
// let pair = [];

// for (let j = 0; j < array2.length; j++) {
//   for (let k = j + 1; k < array2.length; k++) {
//     if (array2[j] + array2[k] === target) {
//       pair = [array2[j], array2[k]];
//       break;
//     }
//   }
//   if (pair.length > 0) break;
// }
// console.log(pair);

// 3. Reverse an Array

// Problem: Reverse an array of integers in-place.

let array3 = [1, 2, 3, 4, 5];
// let array3 = [5, 3, 7, 1];
// let array3 = [6, 8, 2, 4, 0, 9];
// let array3 = [11, 22, 33, 44, 55, 66];
// let array3 = [];
// let array3 = [1];
// let array3 = [0, 0, 0, 0];
// let array3 = [-5, -3, -8, -2];
// let array3 = [1000000000, 999999999, 999999998];
// console.log(array3);
// for (let l = 0; l < array3.length / 2; l++) {
//   let temp = array3[l];
//   array3[l] = array3[array3.length - l - 1];
//   array3[array3.length - l - 1] = temp;
// }
// console.log(array3);

// 4. Count Vowels in a String

// Problem: Given a string, count the number of vowels in it (a, e, i, o, u).

let string = "hello world";
// let string = "beautiful" // (Vowels: 5)
// let string = "aeiou" // (Vowels: 5)
// let string = "programming" // (Vowels: 3)
// let string = "example" // (Vowels: 3)
// let string = "" // (Empty string, no vowels)
// let string = "12345" // (No vowels, only digits)
// let string = "rhythm"; // (No vowels)
// let string = "AEIOU" // (Vowels: 5, all uppercase)
// let string = "a quick brown fox" // (Vowels: 6)
// let vowels = ["a", "e", "i", "o", "u"];
// let count = 0;
// for (char of string) {
//   vowels.includes(char.toLowerCase()) && count++;
// }

// console.log(count);

// 5. Palindrome Check

// Problem: Check whether a given string is a palindrome (reads the same forward and backward).

const string2 = "radar";
// const string2 =  "civic"
// const string2 =  "hello"
// const string2 =  "world"
// const string2 =  "python"
// const string2 =  "abcde"
// const string2 = "a";
// const string2 = "()()";
// const string2 = "())(";
// let isPalindrome = true;
// if (string2.length !== 1) {
//   for (let m = 0; m < string2.length / 2; m++) {
//     if (string2[m] !== string2[string2.length - m - 1]) {
//       isPalindrome = false;
//       break;
//     }
//   }
// }
// console.log(isPalindrome ? "Palindrome" : "Not Palindrome");

// 6. Remove Duplicates from an Array

// Problem: Given an array of integers, remove duplicates and return the new length of the array.
let array4 = [5, 3, 7, 1, 1, 3]; // (New Length: 4)
// let array4 = [8, 8, 8, 8, 8] // (New Length: 1)
// let array4 = [12, 14, 15, 16, 17] // (New Length: 5)
// let array4 = [] // (Empty array, New Length: 0)
// let array4 = [7, 7, 7, 7, 7, 7, 7] // (New Length: 1)
// let array4 = [1] // (New Length: 1, single element)
// let array4 = [1, 1, 1, 1] // (New Length: 1)
// let array4 = [0, 0, 0, 0, 0] // (New Length: 1)

// let uniqueElements = {};

// array4.forEach((element) => {
//   if (!uniqueElements[element]) {
//     uniqueElements[element] = 1;
//   } else {
//     uniqueElements[element] = uniqueElements[element]++;
//   }
// });

// console.log(Object.keys(uniqueElements).length);

// 7. Find the Minimum and Maximum in an Array

// Problem: Find both the minimum and maximum number in an array of integers in a single pass.
const array5 = [-1, 3, -5, 7, 2]; //(Min: -5, Max: 7)
// const array5 =  [7, 8, 9, 5, 4] //(Min: 4, Max: 9)
// const array5 =  [12, 19, 6, 3, 17] //(Min: 3, Max: 19)
// const array5 = []; //(Empty array)
// const array5 =  [7] //(Min: 7, Max: 7, single element)
// const array5 =  [5, 5, 5, 5] //(Min: 5, Max: 5)
// const array5 =  [-10, -20, -5, -30] //(Min: -30, Max: -5)
// const array5 =  [100, 200, 300, 400, 500] //(Min: 100, Max: 500)

// let max, min;
// max = min = array5[0] || [];

// for (let n = 0; n < array5.length; n++) {
//   if (array5[n] > max) max = array5[n];
//   if (array5[n] < min) min = array5[n];
// }

// console.log("Min: ", min, "Max: ", max);

// 8. Count Occurrences of a Character in a String

// Problem: Given a string, count the occurrences of a specific character.
const string3 = "programming";
const character = "g"; // (Occurrences: 2)
//const string3 = "mississippi"; const character = 's' // (Occurrences: 4)
// const string3 = "abacaba"; const character = 'a' // (Occurrences: 4)
// const string3 = ""; const character = 'a' // (Occurrences: 0, empty string)
// const string3 = "hello"; const character = 'z' // (Occurrences: 0, character not in string)
// const string3 = "abcdefg"; const character = 'b' // (Occurrences: 1)
// const string3 = "aaa"; const character = 'a' // (Occurrences: 3)
// const string3 = "hello"; const character = 'H' // (Occurrences: 1, case-sensitive)

// let count = 0;
// for (let o = 0; o < string3.length; o++) {
//   string3[o].toLowerCase() === character.toLowerCase() && count++;
// }
// console.log("Occurrences: ", count);

// 10. Fibonacci Sequence (Iterative)

// Problem: Implement the Fibonacci sequence using an iterative approach.

let array6;
let n = 5; // (Fibonacci sequence: [0, 1, 1, 2, 3])
// let n = 7 // (Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8])
// let n = 10 // (Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
// let n = 1 // (Fibonacci sequence: [0])
// let n = 3 // (Fibonacci sequence: [0, 1, 1])
// let n = 0 // (Fibonacci sequence: [])
// let n = -5; // (Invalid input, negative number)
// let n = 2 // (Fibonacci sequence: [0, 1])
// let n = 15 // (Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377])
// let n = 10;
let count = 0;

// if (n < 0) array6 = "Invalid input, negative number";
// else if (n == 0) array6 = [];
// else if (n == 1) array6 = [0];
// else if (n == 2) array6 = [0, 1];
// else {
//   array6 = [0, 1];
//   for (let p = 2; p < n; p++) {
//     array6.push(array6[p - 1] + array6[p - 2]);
//   }
// }
// console.log(array6);

// 11. Find the First Non-Repeating Character in a String

// Problem: Given a string, find the first non-repeating character.
let string4 = "swiss"; //(First non-repeating character: 'w')
// let string4 = "leetcode" //(First non-repeating character: 'l')
// let string4 = "abcabcde" //(First non-repeating character: 'd')
// let string4 = "aabbccddeeffg" //(First non-repeating character: 'g')
// let string4 = "aabbccde" //(First non-repeating character: 'd')
// let string4 = "" //(Empty string, no non-repeating character)
// let string4 = "aabbccdd" //(No non-repeating character)
// let string4 = "aaaa" //(No non-repeating character)
// let string4 = "xyzxyz" //(No non-repeating character)
// let string4 = "zzzzzz" //(No non-repeating character)
// let duplicateDetectArray = [];

// for (let q = 0; q < string4.length; q++) {
//   let characterIndex = duplicateDetectArray.findIndex(
//     (character) => character === string4[q],
//   );
//   if (characterIndex !== -1) {
//     duplicateDetectArray.splice(characterIndex, 1);
//   } else {
//     duplicateDetectArray.push(string4[q]);
//   }
// }
// console.log(duplicateDetectArray[0]);

// 13. Sum of Digits

// Problem: Given a number, find the sum of its digits.
let number = 123; // 6
// let number = 4567// 22
// let number = 9 // 9
// let number = 1001 // 2
// let number = 987654 // 39
// let number = 0 // 0
// let number = -123 // 6
// let number = 100000 // 1
// let number = -9 // 9

// if (isNaN(number)) return console.log("Please provide a valid number.");
// let summedDigits = Math.abs(number)
//   .toString()
//   .split("")
//   .reduce((numbersSum, currentValue) => {
//     return (numbersSum += parseInt(currentValue));
//   }, 0);
// console.log(summedDigits);

// 15. First Missing Positive Integer

// Problem: Find the first missing positive integer in an unsorted array of integers.
let unsortedArray = [1, 2, 0]; // 3
// let unsortedArray = [3, 4, -1, 1]; // 2
// let unsortedArray = [7, 8, 9, 11, 12] // 1
// let unsortedArray = [1, 2, 3, 4, 5] // 6
// let unsortedArray = [2, 3, 4, 5] // 1
// let unsortedArray = [] // 1
// let unsortedArray = [0, 0, 0] // 1
// let unsortedArray = [-1, -2, -3] // 1
// let unsortedArray = [1, 1, 2, 2] // 3
// let unsortedArray = [2, 2, 2, 1] // 3
// let unsortedArray = [1] // 2
// let unsortedArray = [2]; // 1
// let unsortedArray = [1, 2, 3, 10, 2147483647] // 4
// let unsortedArray = [4, 3, 2, 1] // 5
// let unsortedArray = [1, 1000, 2, 3, 4, 6] // 5
// let numbersList = {};

// unsortedArray.forEach((element) => {
//   if (element > 0) {
//     numbersList[element] = "a";
//   }
// });
// let r;
// for (r = 1; r < unsortedArray.length; r++) {
//   if (!numbersList[r]) {
//     break;
//   }
// }
// console.log(r === unsortedArray.length && unsortedArray.length > 1 ? r + 1 : r);
