class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const combinations: number[][] = []
        
        const backtrack = (i: number, curCombination: number[], total: number) => {
            if (total === target) {
                combinations.push([...curCombination])
                return 
            }

            if (i >= nums.length || total > target) {
                return
            }

            curCombination.push(nums[i])
            backtrack(i, curCombination, total + nums[i])

            curCombination.pop()
            backtrack(i + 1, curCombination, total)
        }

        backtrack(0, [], 0)

        return combinations
    }
}
