const { sortedSquares } = require('./977-SquaresOfASortedArray');

test('nums = [-4,-1,0,3,10]', () => {
  let nums = [-4, -1, 0, 3, 10];
  expect(sortedSquares(nums)).toEqual([0, 1, 9, 16, 100]);
});

test('nums = [-4,-1]', () => {
  let nums = [-4, -1];
  expect(sortedSquares(nums)).toEqual([1, 16]);
});

test('nums = [0,3,10]', () => {
  let nums = [0, 3, 10];
  expect(sortedSquares(nums)).toEqual([0, 9, 100]);
});
