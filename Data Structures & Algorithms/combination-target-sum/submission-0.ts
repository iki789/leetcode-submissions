class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const combinations = []

        const dfs = (i: number, curCombination: number[], total: number) => {
            if (total === target) {
                combinations.push([...curCombination])
                return
            }

            if (i > nums.length - 1 || total > target) {
                return
            }

            curCombination.push(nums[i])
            dfs(i, curCombination, total + nums[i])
            curCombination.pop()
            dfs(i + 1, curCombination, total)
        }
        dfs(0, [], 0)

        return combinations
    }
}
