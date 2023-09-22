/*
 * 121. Best Time to Buy and Sell Stock
 * (https://leetcode.com/problems/best-time-to-buy-and-sell-stock)
 *
 * ============
 * Descriptions:
 *
 *  You are given an array prices where prices[i] is the price of a given stock
 *  on the ith day.
 *
 *  You want to maximize your profit by choosing a single day to buy one stock
 *  and choosing a different day in the future to sell that stock.
 *  Return the maximum profit you can achieve from this transaction. If you
 *  cannot achieve any profit, return 0.
 *
 * ============
 * Constraints:
 * -  1 <= prices.length <= 1E+05
 * -  0 <= prices[i] <= 1E+04
 *
 * ============
 * Test Cases:
 *  1. general:
 *      prices = [7,1,5,3,6,4] ==> 5
 *      prices = [7,1,6,3,5,4] ==> 5
 *      prices = [7,2,5,3,1,4,2,6] ==> 5
 *      prices = [7,6,4,3,1] ==> 0
 *
 *  2. corner:
 *      prices = [0] ==> profit = 0 (only price is 0)
 *      prices = [3] ==> profit = 0 (prices.num == 1)
 *      prices = [0,3] ==> profit = 3 (prices.num == 1, with one 0)
 *      prices = [3,0] ==> profit = 0 (prices.num == 1, with one 0)
 *      prices = [1,2,3,4,5,6,7] ==> profit = 6 (increasing prices)
 *      prices = [7,6,5,4,3,2,1] ==> profit = 0 (decreasing prices)
 */

/* method:
 *  cache the start of current window (minimum value)
 *  cache the current maximum profit
 *  update when pointer moves to the right
 *
 */

function maxProfit(prices: number[]): number{
  let profit = 0;
  let min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
}

export default maxProfit;
