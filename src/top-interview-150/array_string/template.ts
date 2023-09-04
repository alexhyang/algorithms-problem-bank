/*
 * 26. Remove Duplicates from Sorted Array
 * (https://leetcode.com/problems/remove-duplicates-from-sorted-array)
 * ------
 *  Given an integer array nums sorted in non-decreasing order, remove the
 *  duplicates in-place such that each unique element appears only once. The
 *  relative order of the elements should be kept the same. Then return the
 *  number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted,
 * you need to do the following things:
 *  - Change the array nums such that the first k elements of nums contain the
 *    unique elements in the order they were present in nums initially. The
 *    remaining elements of nums are not important as well as the size of nums.
 *  - Return k.

 *
*/

/*  Test Cases:
 *  1. general:
 *      nums = [1,1,2] => 2, nums = [1,2,_]
 *      nums = [0,0,1,1,1,2,2,3,3,4] => 5, nums = [0,1,2,3,4,_,_,_,_,_]
 *
 *  2. nums.length = 1:
 *      nums = [3] => 1, nums = [3]
 *
 *  3. only one unique value in nums:
 *      nums = [3,3,3] => 1, nums = [3,3,3]
 *
 *  4. no duplicates:
 *      nums = [1,2,3] => 3, nums = [1,2,3]
 *
 */

/*
 *  if (nums.length === 1) { return 1 }
 *  if (val > 50) { return nums.length }
 *  if (n !== 0 && m !== 0) {
 *    merge nums1 & nums2 from max to min
 *  }
 */


/**
 Do not return anything, modify nums1 in-place instead.
 */
function removeDuplicates(nums: number[]): number {
  let i = 0;
  let k = 0;
  let current = -999;
  while (i < nums.length) {
    if (nums[i] !== current) {
      current = nums[i];
      nums[k++] = nums[i];
    }
    i++;
  }
  return k;
}

export default removeDuplicates;
