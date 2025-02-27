/*
 * 55. Jump Game
 * (https://leetcode.com/problems/jump-game)
 *
 * ============
 * Descriptions:
 *  You are given an integer array nums. You are initially positioned at the
 *  array's first index, and each element in the array represents your maximum
 *  jump length at that position.
 *
 *  Return true if you can reach the last index, or false otherwise.
 *
 * ============
 * Constraints:
 * -  1 <= nums.length <= 1E+04
 * -  0 <= nums[i] <= 1E+05
 *
 * ============
 * Test Cases:
 *  1. general:
 *      nums = [2,3,1,1,4] => true
 *      nums = [2,5,1,3,4] => true
 *      nums = [3,2,1,0,4] => false
 *      nums = [0,1,5,2,5] => false
 *
 *  2. corner:
 *      nums = [0] => true
 *      nums = [1] => true
 *      nums = [0,0,0,0,0] => false
 *      nums = [0,1,2,3] => false // start with 0, with more than 1 elem
 *
 * ============
 * Methods:
 *  ex. [2,3,1,1,4]
 *  1. find substring of all possibilities of next jump [2,3,1]
 *  2. follow the increase of values, find the value right before decrease, 3
 *  3. jump to this value and repeat from step 1
 *
 *  explanation:
 *    if values keep increasing, jumps from latter values will reacher further
 *    position
 *
 */

function canJump(nums: number[]): boolean {
  return false;
}

export default canJump;
