/*
 * 189. Rotate Array
 * (https://leetcode.com/problems/rotate-array)
 *
 * ============
 * Descriptions:
 *
 *  Given an integer array nums, rotate the array to the right by k steps,
 *  where k is non-negative.
 *
 * ============
 * Constraints:
 * -  1 <= nums.length <= 1E+05
 * -  -2E+31 <= nums[i] <= 2E+31 - 1
 * -  0 <= k <= 1E+05
 *
 * ============
 * Test Cases:
 *  1. general:
 *      nums = [1,2,3,4,5,6,7], k = 3 => [5,6,7,1,2,3,4]
 *      nums = [-1,-100,3,99], k = 2 => [3,99,-1,-100]
 *      nums = [-1,-100,3,99], k = 6 => [3,99,-1,-100]
 *
 *  2. corner:
 *      nums = [1,2,3,4,5], k = 0 => [1,2,3,4,5] // k = 0
 *      nums = [1,2,3,4,5], k = 5 => [1,2,3,4,5] // k = nums.length
 *      nums = [3], k = 0 => [3] // nums.length = 1, k = 0
 *      nums = [3], k = 1 => [3] // nums.length = 1, k = 1
 *      nums = [3], k = 4 => [3] // nums.length = 1, k > nums.length
 *
 *
*/

function rotate(nums: number[], k: number): number[] {
  k = k % nums.length;
  let i = nums.length - 1;
  let j = k - 1;
  let tmp: number[] = Array(k).fill(0);

  // nums -> tmp
  while (j >= 0) {
    tmp[j--] = nums[i--];
    // i--;
    // j--;
  }

  // shift in place
  while (i >= 0) {
    nums[i + k] = nums[i--];
    // i--;
  }

  // tmp -> nums
  for (let left = 0; left < tmp.length; left++) {
    nums[left] = tmp[left];
  }

  return nums;
}

export default rotate;
