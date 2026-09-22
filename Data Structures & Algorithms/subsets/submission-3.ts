class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const sets: number[][] = []

        const dfs = (i: number, curSet: number[]) => {
            if (i > nums.length - 1) {
                sets.push([...curSet])
                return
            }

            curSet.push(nums[i])
            dfs(i + 1, curSet)
            curSet.pop()
            dfs(i + 1, curSet)
        }
        dfs(0, [])
        return sets
    }
}
