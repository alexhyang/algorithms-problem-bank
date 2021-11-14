const { isValid, popLastItemInStack } = require("./20-ValidParentheses");

test('add "(" to empty stack', () => {
  const stack = [];
  const nextParentheses = "(";
  expect(popLastItemInStack(stack, nextParentheses)).toBeFalsy();
});

test('add "(" to ["("]', () => {
  const stack = ["("];
  const nextParentheses = "(";
  expect(popLastItemInStack(stack, nextParentheses)).toBeFalsy();
});

test('add ")" to ["("]', () => {
  const stack = ["("];
  const nextParentheses = ")";
  expect(popLastItemInStack(stack, nextParentheses)).toBeTruthy();
});

test('add ")" to ["[", "("]', () => {
  const stack = ["[", "("];
  const nextParentheses = ")";
  expect(popLastItemInStack(stack, nextParentheses)).toBeTruthy();
});

test('"()[]{}" to be valid', () => {
  const str = "()[]{}";
  expect(isValid(str)).toBeTruthy();
});
