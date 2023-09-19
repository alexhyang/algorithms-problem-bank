import rotate from './6-Rotate_Array';

describe('test rotate()', () => {
  it('corner case: nums.length = 1, k = 0', () => {
    const nums = [3];
    const k = 0;
    const expected = [3];
    const output = rotate(nums, k);
    expect(output).toEqual(expected);
  });

  it('corner case: nums.length = 1, k = 1', () => {
    const nums = [3];
    const k = 1;
    const expected = [3];
    const output = rotate(nums, k);
    expect(output).toEqual(expected);
  });

  it('corner case: nums.length = 1, k = 4 > nums.length', () => {
    const nums = [3];
    const k = 4;
    const expected = [3];
    const output = rotate(nums, k);
    expect(output).toEqual(expected);
  });

  it('corner case: nums.length > 1, k = 0', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 0;
    const expected = [1, 2, 3, 4, 5];
    const output = rotate(nums, k);
    expect(output).toEqual(expected);
  });

  it('corner case: nums.length = 5 > 1, k = nums.length', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 5;
    const expected = [1, 2, 3, 4, 5];
    const output = rotate(nums, k);
    expect(output).toEqual(expected);
  });

  describe('general case', () => {
    it('case1', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7];
      const k = 3;
      const expected = [5, 6, 7, 1, 2, 3, 4];
      const output = rotate(nums, k);
      expect(output).toEqual(expected);
    });

    it('case2', () => {
      const nums = [-1, -100, 3, 99];
      const k = 2;
      const expected = [3, 99, -1, -100];
      const output = rotate(nums, k);
      expect(output).toEqual(expected);
    });

    it('case3', () => {
      const nums = [-1, -100, 3, 99];
      const k = 6;
      const expected = [3, 99, -1, -100];
      const output = rotate(nums, k);
      expect(output).toEqual(expected);
    });
  });
});
