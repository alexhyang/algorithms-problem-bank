const { floodFill } = require('./733-FloodFill');

test('image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2', () => {
  let image = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  let sr = 0;
  let sc = 0;
  let newColor = 2;
  expect(floodFill(image, sr, sc, newColor)).toEqual([
    [2, 2, 2],
    [2, 2, 2],
  ]);
});

test('image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2', () => {
  let image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ];
  let sr = 1;
  let sc = 1;
  let newColor = 2;
  expect(floodFill(image, sr, sc, newColor)).toEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]);
});
