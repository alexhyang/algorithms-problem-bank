const { checkInclusion } = require("./567-Permutation");

test('s1 = "", s2 = "a"', () => {
  let s1 = "";
  let s2 = "a";
  expect(checkInclusion(s1, s2)).toEqual(false);
});

test('s1 = "ab", s2 = "ba"', () => {
  let s1 = "ab";
  let s2 = "ba";
  expect(checkInclusion(s1, s2)).toEqual(true);
});

test('s1 = "ab", s2 = "baa"', () => {
  let s1 = "aba";
  let s2 = "baa";
  expect(checkInclusion(s1, s2)).toEqual(true);
});

test('s1 = "aa", s2 = "baa"', () => {
  let s1 = "aa";
  let s2 = "baa";
  expect(checkInclusion(s1, s2)).toEqual(true);
});

test('s1 = "aa", s2 = "aba"', () => {
  let s1 = "aa";
  let s2 = "aba";
  expect(checkInclusion(s1, s2)).toEqual(false);
});

test('s1 = "ab", s2 = "eidbaooo"', () => {
  let s1 = "ab";
  let s2 = "eidbaooo";
  expect(checkInclusion(s1, s2)).toBe(true);
});

test('s1 = "ab", s2 = "eidboaoo"', () => {
  let s1 = "ab";
  let s2 = "eidboaoo";
  expect(checkInclusion(s1, s2)).toBe(false);
});
