import maxProfit from './7-best_stock_transaction_time';

describe('test maxProfit()', () => {
  describe('corner case(s):', () => {
    it('prices = [0] ==> 0', () => {
      const prices = [0];
      const expected = 0;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });

    it('prices = [3] ==> 0', () => {
      const prices = [3];
      const expected = 0;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });

    it('prices = [0,3] ==> 3', () => {
      const prices = [0,3];
      const expected = 3;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });

    it('prices = [3,0] ==> 0', () => {
      const prices = [3,0];
      const expected = 0;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });

    it('prices = [1,2,3,4,5,6,7] ==> 6', () => {
      const prices = [1,2,3,4,5,6,7];
      const expected = 6;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });

    it('prices = [7,6,5,4,3,2,1] ==> 0', () => {
      const prices = [7,6,5,4,3,2,1];
      const expected = 0;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });
  });

  describe('general case(s):', () => {
    it('prices = [7,1,5,3,6,4] ==> 5', () => {
      const prices = [7,1,5,3,6,4];
      const expected = 5;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });

    it('prices = [7,1,6,3,5,4] ==> 5', () => {
      const prices = [7,1,6,3,5,4];
      const expected = 5;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });

    it('prices = [7,2,5,3,1,4,2,6] ==> 5', () => {
      const prices = [7,2,5,3,1,4,2,6];
      const expected = 5;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });

    it('prices = [7,6,4,3,1] ==> 0', () => {
      const prices = [7,6,4,3,1];
      const expected = 0;
      const output = maxProfit(prices);
      expect(output).toBe(expected);
    });
  });
});
