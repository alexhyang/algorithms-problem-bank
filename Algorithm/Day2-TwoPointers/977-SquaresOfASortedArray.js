/* 
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in 
non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // Method 1:
  // nums = nums.map((num) => Math.pow(num, 2));
  // nums.sort((a, b) => a - b);
  // return nums;

  // Method 2:
  let output = [];
  let left = 0;
  let right = nums.length - 1;
  let current = right;
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      output[current--] = Math.pow(nums[left++], 2);
    } else {
      output[current--] = Math.pow(nums[right--], 2);
    }
  }
  return output;
};

exports.sortedSquares = sortedSquares;
