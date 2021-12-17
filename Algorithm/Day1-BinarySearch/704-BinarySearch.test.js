const { search } = require("./704-BinarySearch");

// array length = 1
test("nums = [-1], target = -1", () => {
  const nums = [-1];
  const target = -1;
  expect(search(nums, target)).toBe(0);
});

test("nums = [-1], target = -2", () => {
  const nums = [-1];
  const target = -2;
  expect(search(nums, target)).toBe(-1);
});

test("nums = [-1], target = 2", () => {
  const nums = [-1];
  const target = 2;
  expect(search(nums, target)).toBe(-1);
});

// array length = 2
test("nums = [-1, 1], target = -1", () => {
  const nums = [-1, 1];
  const target = -1;
  expect(search(nums, target)).toBe(0);
});

test("nums = [-1, 1], target = 1", () => {
  let nums = [-1, 1];
  let target = 1;
  expect(search(nums, target)).toBe(1);
});

test("nums = [-1, 1], target = 0", () => {
  let nums = [-1, 1];
  let target = 0;
  expect(search(nums, target)).toBe(-1);
});

test("nums = [-1, 1], target = -2", () => {
  let nums = [-1, 1];
  let target = -2;
  expect(search(nums, target)).toBe(-1);
});

test("nums = [-1, 1], target = 3", () => {
  let nums = [-1, 1];
  let target = 3;
  expect(search(nums, target)).toBe(-1);
});

// array length > 2
test("nums = [-1,0,3,5,9,12], target = -1", () => {
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = -1;
  expect(search(nums, target)).toBe(0);
});

test("nums = [-1,0,3,5,9,12], target = 12", () => {
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = 12;
  expect(search(nums, target)).toBe(5);
});

test("nums = [-1,0,3,5,9,12], target = 0", () => {
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = 0;
  expect(search(nums, target)).toBe(1);
});

test("nums = [-1,0,3,5,9,12], target = 9", () => {
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = 9;
  expect(search(nums, target)).toBe(4);
});

test("nums = [-1,0,3,5,9,12], target = -2", () => {
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = -2;
  expect(search(nums, target)).toBe(-1);
});

test("nums = [-1,0,3,5,9,12], target = 2", () => {
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = 2;
  expect(search(nums, target)).toBe(-1);
});

test("nums = [-1,0,3,5,9,12], target = 22", () => {
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = 22;
  expect(search(nums, target)).toBe(-1);
});
