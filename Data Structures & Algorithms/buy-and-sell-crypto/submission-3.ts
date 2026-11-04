class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0
        let right = 1
        let maxProfit = 0
        
        while (right < prices.length) {
          if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left])
          } else {
            left = right
          }
          right += 1
        }

        return maxProfit
    }
}
