/*
 * 169. Majority Element
 * (https://leetcode.com/problems/majority-element/)
 *
 * ============
 * Description:
 *  Given an array nums of size n, return the majority element.
 *
 *  The majority element is the element that appears more than ⌊n / 2⌋ times.
 *  You may assume that the majority element always exists in the array.
 *
 * ============
 * Constraints:
 * -  n == nums.length
 * -  1 <= n <= 5E+04
 * -  -1E+09 <= nums[i] <= 1E+09
 *
 * ============
 * Test Cases:
 * 1. general:
 *    nums = [3,2,3] => 3
 *    nums = [2,2,1,1,1,2,2] => 2
 *
 * 2. nums.length = 1:
 *    nums = [3] => 1, nums = [3]
 */

function majorityElement(nums: number[]): number | undefined {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const count = (map.get(nums[i]) ?? 0) + 1;
    if (count > nums.length / 2) {
      return nums[i];
    }
    map.set(nums[i], count);
  }
}

export default majorityElement;
