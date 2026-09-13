class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxSum = nums[0]
        let curSum = 0

        for (const num of nums) {
            if (curSum < 0) {
                curSum = 0
            }
            curSum += num
            maxSum = Math.max(curSum, maxSum)
        }

        return maxSum
    }
}
