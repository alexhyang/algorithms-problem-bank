/*
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 * order, and two integers m and n, representing the number of elements in
 * nums1 and nums2 respectively.

 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.

 * The final sorted array should not be returned by the function, but instead
 * be stored inside the array nums1. To accommodate this, nums1 has a length
 * of m + n, where the first m elements denote the elements that should be
 * merged, and the last n elements are set to 0 and should be ignored. nums2
 * has a length of n.
 *
*/

/**
 Do not return anything, modify nums1 in-place instead.
 */

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {

// }

/*  Test Cases:
 *  1. general:
 *      [1,2,3,0,0,0] + [2,5,6] = [1,2,2,3,5,6]
 *      [1,2,3,0,0] + [2,5] = [1,2,2,3,5]
 *
 *  2. empty nums2:
 *      [1] + [] = [1]
 *
 *  3. empty nums1:
 *      [0] + [1] = [1]
 *
 *  4. num1.length = num2.length = 1:
 *      [1, 0] + [2] = [1,2]
 *
 */

/*  if (n = 0) { do nothing }
 *  if (n !== 0 && m == 0) { nums1 = nums2 }
 *  if (n !== 0 && m !== 0) {
 *    merge nums1 & nums2 from max to min
 *  }
 */

function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  if (n === 0) return nums1;

  if (m === 0) {
    nums1 = nums2;
  } else {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k--] = nums1[i--];
      } else {
        nums1[k--] = nums2[j--];
      }
    }
  }
  return nums1;
}

export default merge;
