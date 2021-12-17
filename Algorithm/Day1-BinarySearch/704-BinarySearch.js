/* 
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  let current;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    current = nums[mid];
    if (target < current) {
      right = mid - 1;
    } else if (target > current) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

exports.search = search;
