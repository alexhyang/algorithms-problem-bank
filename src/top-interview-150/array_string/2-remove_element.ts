/*
 * 27. Remove Element (https://leetcode.com/problems/remove-element/)
 * ------
 * Given an integer array nums and an integer val, remove all occurrences of
 * val in nums in-place. The order of the elements may be changed. Then return
 * the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to
 * get accepted, you need to do the following things:
 *  - Change the array nums such that the first k elements of nums contain the
 *    elements which are not equal to val. The remaining elements of nums are
 *    not important as well as the size of nums.
 *  - Return k.
 *
*/

/*  Test Cases:
 *  1. general:
 *      nums = [3,2,2,3], val = 3 => 2, nums = [2,2,_,_]
 *      nums = [0,1,2,2,3,0,4,2], val = 2 => 5, nums = [0,1,4,0,3,_,_,_]
 *
 *  2. no matches:
 *      nums = [3,3,3,3], val = 2 => 4, nums = [3,3,3,3]
 *
 *  3. all matches:
 *      nums = [3,3,3,3], val = 3 => 0, nums = [_,_,_,_]
 *
 *  4. empty nums:
 *      nums = [], val = 3 => 0, nums = []
 *
 *  5. val out of range of nums[i] (val > 50)
 *      nums = [3,3,3,3], val = 51 => 4, nums = [3,3,3,3]
 */

/*
 *  if (nums.length === 0) { return 0 }
 *  if (val > 50) { return nums.length }
 *  if (n !== 0 && m !== 0) {
 *    merge nums1 & nums2 from max to min
 *  }
 */


/**
 Do not return anything, modify nums1 in-place instead.
 */
function removeElement(nums: number[], val: number): number {
  let i = 0;
  let k = 0;
  while (i < nums.length) {
    if (nums[i] !== val) nums[k++] = nums[i];
    i++;
  }
  return k;
}

export default removeElement;
