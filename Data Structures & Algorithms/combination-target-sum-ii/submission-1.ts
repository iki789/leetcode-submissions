class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const combinations: number[][] = []
        candidates.sort((a, b) =>  a - b)
        const dfs = (i: number, curCombination: number[], total: number) => {
            if (total === target) {
                combinations.push([...curCombination])
                return
            }
            if (i >= candidates.length || total > target) {
                return
            }

            curCombination.push(candidates[i])
            dfs(i + 1, curCombination, total + candidates[i])

            while (i < candidates.length && candidates[i] === candidates[i + 1]) {
                i += 1
            }
            curCombination.pop()
            dfs(i + 1, curCombination, total)
        }
        dfs(0, [], 0)
        return combinations
    }
}
