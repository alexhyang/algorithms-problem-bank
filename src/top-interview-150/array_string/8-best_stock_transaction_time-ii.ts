/*
 * 122. Best Time to Buy and Sell Stock II
 * (https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)
 *
 * ============
 * Descriptions:
 *
 *  You are given an array prices where prices[i] is the price of a given stock
 *  on the ith day.
 *
 *  On each day, you may decide to buy and/or sell the stock. You can only hold
 *  at most one share of the stock at any time. However, you can buy it then
 *  immediately sell it on the same day.
 *
 *  Find and return the maximum profit you can achieve.
 *
 * ============
 * Constraints:
 * -  1 <= prices.length <= 3E+04
 * -  0 <= prices[i] <= 1E+04
 *
 * ============
 * Test Cases:
 *  1. general:
 *      prices = [7,1,5,3,6,4] ==> 7
 *      prices = [7,1,6,3,5,4] ==> 7
 *      prices = [7,2,5,3,1,4,2,6] ==> 10
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

/* ====== Method ======
 * 1. find start of window
 * 2. find end of window
 * 3. reset window
 *
 */

function maxProfit(prices: number[]): number{
  let profit = 0;
  let currentProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    currentProfit = prices[i + 1] - prices[i];
    profit += (currentProfit > 0) ? currentProfit : 0;
  }
  return profit;
}

export default maxProfit;
