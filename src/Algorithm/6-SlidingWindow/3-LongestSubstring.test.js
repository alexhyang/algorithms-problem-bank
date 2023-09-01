const { lengthOfLongestSubstring } = require('./3-LongestSubstring');

// s doesn't contain repeated characters
test('s = "", output = 0', () => {
  let s = '';
  expect(lengthOfLongestSubstring(s)).toEqual(0);
});

test('s = " ", output = 1', () => {
  let s = ' ';
  expect(lengthOfLongestSubstring(s)).toEqual(1);
});

test('s = "a", output = 1', () => {
  let s = 'a';
  expect(lengthOfLongestSubstring(s)).toEqual(1);
});

test('s = "abcd", output = 4', () => {
  let s = 'abcd';
  expect(lengthOfLongestSubstring(s)).toEqual(4);
});

// s contains repeated characters
test('s = "bbbbb", output = 1', () => {
  let s = 'bbbbb';
  expect(lengthOfLongestSubstring(s)).toEqual(1);
});

test('s = "abcabcabc", output = 3', () => {
  let s = 'abcabcabc';
  expect(lengthOfLongestSubstring(s)).toEqual(3);
});

test('s = "pwwkew", output = 3', () => {
  let s = 'pwwkew';
  expect(lengthOfLongestSubstring(s)).toEqual(3);
});

test('s = "pwwkewabc", output = 6', () => {
  let s = 'pwwkewabc';
  expect(lengthOfLongestSubstring(s)).toEqual(6);
});
