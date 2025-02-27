import canJump from './9-jump_game';

describe('test canJump()', () => {
  describe('corner case(s):', () => {
    it('[0] => true', () => {
      const nums = [0];
      const expected = true;
      const output = canJump(nums);
      expect(output).toBe(expected);
    });

    it('[1] => true', () => {
      const nums = [1];
      const expected = true;
      const output = canJump(nums);
      expect(output).toBe(expected);
    });

    it('[0,1,2,3] => false', () => {
      const nums = [0,1,2,3];
      const expected = false;
      const output = canJump(nums);
      expect(output).toBe(expected);
    });

    it('[0,0,0,0,0] => false', () => {
      const nums = [0,0,0,0,0];
      const expected = false;
      const output = canJump(nums);
      expect(output).toBe(expected);
    });

  });

  describe('general case(s):', () => {
    it('[2,3,1,1,4] => true', () => {
      const nums = [2,3,1,1,4];
      const expected = true;
      const output = canJump(nums);
      expect(output).toBe(expected);
    });

    it('[2,5,1,3,4] => true', () => {
      const nums = [2,5,1,3,4];
      const expected = true;
      const output = canJump(nums);
      expect(output).toBe(expected);
    });

    it('[3,2,1,0,4] => false', () => {
      const nums = [3,2,1,0,4];
      const expected = false;
      const output = canJump(nums);
      expect(output).toBe(expected);
    });

    it('[0,1,5,2,5] => false', () => {
      const nums = [0,1,5,2,5];
      const expected = false;
      const output = canJump(nums);
      expect(output).toBe(expected);
    });

  });
});
