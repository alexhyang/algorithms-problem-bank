/*
 * 80. Remove Duplicates from Sorted Array II
 * (https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii)
 *
 * ============
 *  Given an integer array nums sorted in non-decreasing order, remove the
 *  duplicates in-place such that each unique element appears at most twice.
 *  The relative order of the elements should be kept the same.
 *
 *  Since it is impossible to change the length of the array in some languages,
 *  you must instead have the result be placed in the first part of the array
 *  nums. More formally, if there are k elements after removing the duplicates,
 *  then the first k elements of nums should hold the final result. It does not
 *  matter what you leave beyond the first k elements.
 *
 *  Return k after placing the final result in the first k slots of nums.
 *
 *  Do not allocate extra space for another array. You must do this by
 *  modifying the input array in-place with O(1) extra memory.
 *
 * ============
 * Constraints:
 * -  1 <= nums.length <= 3 * 10^4
 * -  -10^4 <= nums[i] <= 10^4
 * -  nums is sorted in non-decreasing order.
 *
 * ============
 *  Test Cases:
 *  1. general:
 *      nums = [1,1,1,2,2,3] => 2, nums = [1,1,2,2,3,_]
 *      nums = [0,0,1,1,1,1,2,3,3] => 7, nums = [0,0,1,1,2,3,3,_,_]
 *
 *  2. nums.length = 1:
 *      nums = [3] => 1, nums = [3]
 *
 *  3. only one unique value in nums:
 *      nums = [3,3,3] => 2, nums = [3,3,_]
 *
 *  4. no duplicates:
 *      nums = [1,2,3] => 3, nums = [1,2,3]
 */

function removeDuplicates(nums: number[]): number {
  let k = 0;
  let counter = 0;
  let current = -99999;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== current) {
      current = nums[i];
      nums[k++] = nums[i];
      counter = 1;
    } else {
      if (counter < 2) {
        nums[k++] = nums[i];
        counter++;
      }
    }
  }
  return k;
}

export default removeDuplicates;
