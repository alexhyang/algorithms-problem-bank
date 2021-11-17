const { searchInsert } = require("./35-SearchInsertPosition");

// array with one element
test("nums = [1], target = 1", () => {
  let nums = [1];
  let target = 1;
  expect(searchInsert(nums, target)).toBe(0);
});

test("nums = [1], target = 0", () => {
  let nums = [1];
  let target = 0;
  expect(searchInsert(nums, target)).toBe(0);
});

test("nums = [1], target = 2", () => {
  let nums = [1];
  let target = 2;
  expect(searchInsert(nums, target)).toBe(1);
});

// array with two elements
test("nums = [1, 3], target = 1", () => {
  let nums = [1, 3];
  let target = 1;
  expect(searchInsert(nums, target)).toBe(0);
});

test("nums = [1, 3], target = 3", () => {
  let nums = [1, 3];
  let target = 3;
  expect(searchInsert(nums, target)).toBe(1);
});

test("nums = [1, 3], target = 0", () => {
  let nums = [1, 3];
  let target = 0;
  expect(searchInsert(nums, target)).toBe(0);
});

test("nums = [1, 3], target = 2", () => {
  let nums = [1, 3];
  let target = 2;
  expect(searchInsert(nums, target)).toBe(1);
});

test("nums = [1, 3], target = 4", () => {
  let nums = [1, 3];
  let target = 4;
  expect(searchInsert(nums, target)).toBe(2);
});

// array with multiple elements
test("nums = [1, 3, 5, 6], target = 5", () => {
  let nums = [1, 3, 5, 6];
  let target = 5;
  expect(searchInsert(nums, target)).toBe(2);
});

test("nums = [1, 3, 5, 6], target = 2", () => {
  let nums = [1, 3, 5, 6];
  let target = 2;
  expect(searchInsert(nums, target)).toBe(1);
});

test("nums = [1, 3, 5, 6], target = 7", () => {
  let nums = [1, 3, 5, 6];
  let target = 7;
  expect(searchInsert(nums, target)).toBe(4);
});

test("nums = [1, 3, 5, 6], target = 0", () => {
  let nums = [1, 3, 5, 6];
  let target = 0;
  expect(searchInsert(nums, target)).toBe(0);
});
