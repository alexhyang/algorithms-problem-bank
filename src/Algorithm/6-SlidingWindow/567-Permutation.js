/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or 
false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const freq = Array(26).fill(0);
  let L = 0;
  let R = s1.length;

  if (!s1.length || s1.length > s2.length) return false;

  for (let i = 0; i < s1.length; i++) {
    freq[s1.charCodeAt(i) - 97]++;
    freq[s2.charCodeAt(i) - 97]--;
  }

  if (freq.every((cv) => cv === 0)) return true;

  while (L < s2.length) {
    if (freq.every((cv) => cv === 0)) return true;

    freq[s2.charCodeAt(L++) - 97]++;
    freq[s2.charCodeAt(R++) - 97]--;
  }

  return false;
};

exports.checkInclusion = checkInclusion;
