const { rotate } = require('./189-RotateArray');

test('nums = [1,2,3,4,5,6,7], k = 3', () => {
  let nums = [1, 2, 3, 4, 5, 6, 7];
  let k = 3;
  rotate(nums, k);
  expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

test('nums = [-1,-100,3,99], k = 2', () => {
  let nums = [-1, -100, 3, 99];
  let k = 2;
  rotate(nums, k);
  expect(nums).toEqual([3, 99, -1, -100]);
});

test('nums = [-1,-100,3,99], k = 4', () => {
  let nums = [-1, -100, 3, 99];
  let k = 4;
  rotate(nums, k);
  expect(nums).toEqual([-1, -100, 3, 99]);
});

test('nums = [-1], k = 2', () => {
  let nums = [-1];
  let k = 2;
  rotate(nums, k);
  expect(nums).toEqual([-1]);
});

test('nums = [-1], k = 1', () => {
  let nums = [-1];
  let k = 1;
  rotate(nums, k);
  expect(nums).toEqual([-1]);
});
