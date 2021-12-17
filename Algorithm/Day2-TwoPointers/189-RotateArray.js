/* 
Given an array, rotate the array to the right by k steps, where k is 
non-negative.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // Method 1: Time Limit Exceeded
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop());
  // }

  // Method 2: In-place rotate
  k = k % nums.length;
  if (k != 0) {
    let aux = nums.slice(-k);
    let right = nums.length - 1;
    let left = right - k;
    while (left >= 0) {
      nums[right--] = nums[left--];
    }
    for (let i = 0; i < k; i++) {
      nums[i] = aux[i];
    }
  }
};

exports.rotate = rotate;
