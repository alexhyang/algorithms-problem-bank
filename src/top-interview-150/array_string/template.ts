/*
 * 26. Remove Duplicates from Sorted Array
 * (https://leetcode.com/problems/remove-duplicates-from-sorted-array)
 *
 * ============
 * Descriptions:
 *
 *  Given an integer array nums sorted in non-decreasing order, remove the
 *  duplicates in-place such that each unique element appears only once. The
 *  relative order of the elements should be kept the same. Then return the
 *  number of unique elements in nums.
 *
 *  Consider the number of unique elements of nums to be k, to get accepted,
 *  you need to do the following things:
 *  - Change the array nums such that the first k elements of nums contain the
 *    unique elements in the order they were present in nums initially. The
 *    remaining elements of nums are not important as well as the size of nums.
 *  - Return k.
 *
 * ============
 * Constraints:
 * -  1 <= nums.length <= 3E+04
 * -  -100 <= nums[i] <= 100
 * -  nums is sorted in non-decreasing order
 *
 * ============
 * Test Cases:
 *  1. general:
 *      nums = [1,1,2] => 2, nums = [1,2,_]
 *      nums = [0,0,1,1,1,2,2,3,3,4] => 5, nums = [0,1,2,3,4,_,_,_,_,_]
 *
 *  2. corner:
 *      nums = [3] => 1, nums = [3]
 *      nums = [3,3,3] => 1, nums = [3,_,_]
 *      nums = [1,2,3] => 3, nums = [1,2,3]
 */

function removeDuplicates(nums: number[]): number {
  let k = 0;
  let current = -999;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== current) {
      current = nums[i];
      nums[k++] = nums[i];
    }
  }
  return k;
}

export default removeDuplicates;
