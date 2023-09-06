import majorityElement from './5-majority_element';

describe('test majorityElement()', () => {
  it('corner case: nums.length = 1', () => {
    const nums = [3];
    const expected = 3;
    const output = majorityElement(nums);
    expect(output).toBe(expected);
  });

  it('corner case: nums.length = 2', () => {
    const nums = [4,4];
    const expected = 4;
    const output = majorityElement(nums);
    expect(output).toBe(expected);
  });

  describe('general case:', () => {
    it('case1', () => {
      const nums = [3,2,3];
      const expected = 3;
      const output = majorityElement(nums);
      expect(output).toBe(expected);
    });

    it('case2', () => {
      const nums = [3,3,2,3];
      const expected = 3;
      const output = majorityElement(nums);
      expect(output).toBe(expected);
    });

    it('case3', () => {
      const nums = [2,2,1,1,1,2,2];
      const expected = 2;
      const output = majorityElement(nums);
      expect(output).toBe(expected);
    });

    it('case4', () => {
      const nums = [2,2,1,1,1,2,2,2];
      const expected = 2;
      const output = majorityElement(nums);
      expect(output).toBe(expected);
    });
  });
});
