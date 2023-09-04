import removeDuplicates from './4-remove_duplicates_from_sorted_array_II';

describe('test removeDuplicates()', () => {
  it('corner case: nums.length = 1', () => {
    const nums = [3];
    const expected = 1;
    const output = removeDuplicates(nums);
    expect(output).toBe(expected);
  });

  describe('general case', () => {
    it('case1', () => {
      const nums = [1,1,2];
      const expected = 3;
      const output = removeDuplicates(nums);
      expect(output).toBe(expected);
    });
  });
});
