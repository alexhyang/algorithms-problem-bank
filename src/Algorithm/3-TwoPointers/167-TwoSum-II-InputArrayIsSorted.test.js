const { twoSum } = require("./167-TwoSum-II-InputArrayIsSorted");

test("numbers = [2,7,11,15], target = 9", () => {
  let nums = [2, 7, 11, 15];
  target = 9;
  expect(twoSum(nums, target)).toEqual([1, 2]);
});

test("numbers = [2,7,11,15], target = 13", () => {
  let nums = [2, 7, 11, 15];
  target = 13;
  expect(twoSum(nums, target)).toEqual([1, 3]);
});

test("numbers = [2,7,11,15], target = 17", () => {
  let nums = [2, 7, 11, 15];
  target = 17;
  expect(twoSum(nums, target)).toEqual([1, 4]);
});

test("numbers = [2,7,11,15], target = 18", () => {
  let nums = [2, 7, 11, 15];
  target = 18;
  expect(twoSum(nums, target)).toEqual([2, 3]);
});

test("numbers = [2,7,11,15], target = 22", () => {
  let nums = [2, 7, 11, 15];
  target = 22;
  expect(twoSum(nums, target)).toEqual([2, 4]);
});

test("numbers = [2,7,11,15], target = 26", () => {
  let nums = [2, 7, 11, 15];
  target = 26;
  expect(twoSum(nums, target)).toEqual([3, 4]);
});
