class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const combinations = []

        const backtrack = (i: number, curStack: number[], curSum: number) => {
            if (curSum === target) {
                combinations.push([...curStack])
                return
            }

            if (i >= nums.length || curSum > target) {
                return
            }

            curStack.push(nums[i])
            backtrack(i, curStack, curSum + nums[i])

            curStack.pop()
            backtrack(i + 1, curStack, curSum)
        }

        backtrack(0, [], 0)

        return combinations
    }
}
