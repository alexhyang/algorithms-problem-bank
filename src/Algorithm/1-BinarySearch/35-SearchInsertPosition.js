/*
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, return the 
index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
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
  return left;
};

exports.searchInsert = searchInsert;
