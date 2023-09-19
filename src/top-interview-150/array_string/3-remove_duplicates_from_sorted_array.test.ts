import removeDuplicates from './3-remove_duplicates_from_sorted_array';

describe('test removeDuplicates()', () => {
  it('corner case: nums.length = 1', () => {
    const nums = [3];
    const expected = 1;
    const output = removeDuplicates(nums);
    expect(output).toBe(expected);
  });

  it('general case: one unique value in nums', () => {
    const nums = [3, 3, 3, 3, 3, 3, 3, 3];
    const expected = 1;
    const output = removeDuplicates(nums);
    expect(output).toBe(expected);
  });

  it('general case: no duplicates', () => {
    const nums = [1, 2, 3, 4, 5];
    const expected = 5;
    const output = removeDuplicates(nums);
    expect(output).toBe(expected);
  });

  describe('general case: multiple unique values with duplicates', () => {
    it('case1', () => {
      const nums = [1, 1, 2];
      const expected = 2;
      const output = removeDuplicates(nums);
      expect(output).toBe(expected);
    });

    it('case2', () => {
      const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
      const expected = 5;
      const output = removeDuplicates(nums);
      expect(output).toBe(expected);
    });
  });
});
