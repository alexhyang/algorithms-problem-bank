/*
An image is represented by an m x n integer grid image where image[i][j] 
represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a 
flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 
4-directionally to the starting pixel of the same color as the starting pixel, 
plus any pixels connected 4-directionally to those pixels (also with the same 
color), and so on. Replace the color of all of the aforementioned pixels with 
newColor.

Return the modified image after performing the flood fill.
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let oldColor = image[sr][sc];
  if (oldColor === newColor) return image;

  function DFSFill(image, r, c) {
    if (
      r >= image.length ||
      r < 0 ||
      c >= image[0].length ||
      c < 0 ||
      image[r][c] !== oldColor
    )
      return;
    image[r][c] = newColor;
    DFSFill(image, r - 1, c);
    DFSFill(image, r + 1, c);
    DFSFill(image, r, c - 1);
    DFSFill(image, r, c + 1);
    return image;
  }

  return DFSFill(image, sr, sc);
};

exports.floodFill = floodFill;
