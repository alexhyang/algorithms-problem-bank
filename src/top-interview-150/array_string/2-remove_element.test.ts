import removeElement from './2-remove_element';

describe('test removeElement()', () => {
  it('empty nums', () => {
    const nums:number[] = [];
    const val = 5;

    const expected = 0;
    const output = removeElement(nums, val);
    expect(output).toBe(expected);
  });

  it('nums consists only one element not equal to val', () => {
    const nums = [1];
    const val = 5;

    const expected = 1;
    const output = removeElement(nums, val);
    expect(output).toBe(expected);
  });

  it('nums consists only one element equal to val', () => {
    const nums = [5];
    const val = 5;

    const expected = 0;
    const output = removeElement(nums, val);
    expect(output).toBe(expected);
  });

  it('val out of range (val > 50)', () => {
    const nums = [3,3,3,3];
    const val = 52;

    const expected = 4;
    const output = removeElement(nums, val);
    expect(output).toBe(expected);
  });

  it('all elements in nums are val', () => {
    const nums = [3,3,3,3];
    const val = 3;

    const expected = 0;
    const output = removeElement(nums, val);
    expect(output).toBe(expected);
  });

  it('no elements in nums are val', () => {
    const nums = [3,3,3,3];
    const val = 5;

    const expected = 4;
    const output = removeElement(nums, val);
    expect(output).toBe(expected);
  });

  it('general case 1', () => {
    const nums = [3,2,2,3];
    const val = 3;

    const expected = 2;
    const output = removeElement(nums, val);
    expect(output).toBe(expected);
  });

  it('general case 2', () => {
    const nums = [0,1,2,2,3,0,4,2];
    const val = 2;

    const expected = 5;
    const output = removeElement(nums, val);
    expect(output).toBe(expected);
  });

});
