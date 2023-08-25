const { reverseString } = require("./344-ReverseString");

test('s = ["h","e","l","l","o"]', () => {
  let s = ["h", "e", "l", "l", "o"];
  reverseString(s);
  expect(s).toEqual(["o", "l", "l", "e", "h"]);
});

test('s = ["H","a","n","n","a","h"]', () => {
  let s = ["H", "a", "n", "n", "a", "h"];
  reverseString(s);
  expect(s).toEqual(["h", "a", "n", "n", "a", "H"]);
});
