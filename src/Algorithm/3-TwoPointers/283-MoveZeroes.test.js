const { moveZeroes } = require('./283-MoveZeroes');

test('nums = [0]', () => {
  let nums = [0];
  moveZeroes(nums);
  expect(nums).toEqual([0]);
});

test('nums = [0, 0, 0]', () => {
  let nums = [0, 0, 0];
  moveZeroes(nums);
  expect(nums).toEqual([0, 0, 0]);
});

test('nums = [1]', () => {
  let nums = [1];
  moveZeroes(nums);
  expect(nums).toEqual([1]);
});

test('nums = [0,1,0,3,12]', () => {
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});

test('nums = [0,11,0,1,3,12]', () => {
  let nums = [0, 11, 0, 1, 3, 12];
  moveZeroes(nums);
  expect(nums).toEqual([11, 1, 3, 12, 0, 0]);
});
