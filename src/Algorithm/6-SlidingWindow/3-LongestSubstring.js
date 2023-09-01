/*
Given a string s, find the length of the longest substring without repeating 
characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === '') return 0;

  let longest = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let substring = s.slice(left, right);
    if (substring.includes(s[right])) {
      if (substring.length > longest) {
        longest = substring.length;
      }
      left++;
    } else {
      if (right === s.length - 1 && substring.length + 1 > longest) {
        longest = substring.length + 1;
      }
      right++;
    }
  }

  return longest;
};

exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
