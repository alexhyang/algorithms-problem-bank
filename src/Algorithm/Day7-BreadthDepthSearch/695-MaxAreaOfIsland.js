/*
You are given an m x n binary matrix grid. An island is a group of 1's 
(representing land) connected 4-directionally (horizontal or vertical.) You may 
assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let area = calculateIslandArea(i, j);
        maxArea = area > maxArea ? area : maxArea;
      }
    }
  }

  function calculateIslandArea(r, c) {
    let area = 0;
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] === 0
    )
      return 0;
    grid[r][c] = 0;
    area =
      1 +
      calculateIslandArea(r - 1, c) +
      calculateIslandArea(r + 1, c) +
      calculateIslandArea(r, c - 1) +
      calculateIslandArea(r, c + 1);
    return area;
  }

  return maxArea;
};

exports.maxAreaOfIsland = maxAreaOfIsland;
