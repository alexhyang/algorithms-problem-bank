import merge from './1-merge_sorted_array';

describe('test merge()', () => {
  it('empty nums1, n = 1', () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;

    const expected = [1];
    const output = merge(nums1, m, nums2, n);
    expect(output).toEqual(expected);
  });

  it('empty nums1, n > 1', () => {
    const nums1 = [0, 0, 0];
    const m = 0;
    const nums2 = [3, 5, 6];
    const n = 3;

    const expected = [3, 5, 6];
    const output = merge(nums1, m, nums2, n);
    expect(output).toEqual(expected);
  });

  it('empty nums2', () => {
    const nums1 = [3, 5, 6];
    const m = 3;
    const nums2:number[] = [];
    const n = 0;

    const expected = [3, 5, 6];
    const output = merge(nums1, m, nums2, n);
    expect(output).toEqual(expected);
  });

  it('nums1 + nums2 => [...nums1, ...nums2]', () => {
    const nums1 = [1, 2, 2, 0, 0, 0];
    const m = 3;
    const nums2 = [3, 5, 6];
    const n = 3;

    const expected = [1, 2, 2, 3, 5, 6];
    const output = merge(nums1, m, nums2, n);
    expect(output).toEqual(expected);
  });

  it('nums1 + nums2 => [...nums2, ...nums1]', () => {
    const nums1 = [3, 5, 6, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 2];
    const n = 3;

    const expected = [1, 2, 2, 3, 5, 6];
    const output = merge(nums1, m, nums2, n);
    expect(output).toEqual(expected);
  });

  it('general case where integers are mixed', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    const expected = [1, 2, 2, 3, 5, 6];
    const output = merge(nums1, m, nums2, n);
    expect(output).toEqual(expected);
  });
});
