class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minBuy = prices[0]
        let maxProfit = 0
        for (const price of prices) {
            minBuy = Math.min(minBuy, price)
            maxProfit = Math.max(maxProfit, price - minBuy)
        }
        return maxProfit
    }
}
