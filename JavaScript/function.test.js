const { solution } = require("./function");

test("nums = [1, 2, 3, 4, 5], target = 5", () => {
  let nums = [1, 2, 3, 4, 5];
  let target = 5;
  expect(solution(nums, target)).toBe(4);
});
