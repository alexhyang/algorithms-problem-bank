const { reverseWords } = require('./557-ReverseWordsInAString-III');

test('s = "Let\'s take LeetCode contest"', () => {
  let s = "Let's take LeetCode contest";
  expect(reverseWords(s)).toEqual("s'teL ekat edoCteeL tsetnoc");
});
