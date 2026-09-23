class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const combinations: number[][] = []
        candidates.sort((a, b) => a - b)

        const dfs = (i: number, curCandidates: number[], total: number) => {
            if (total === target) {
                combinations.push([...curCandidates])
                return
            }
             if (i >= candidates.length || total > target){
                return
            }

            curCandidates.push(candidates[i])
            dfs(i + 1, curCandidates, total + candidates[i])
            curCandidates.pop()
            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i += 1
            }
            dfs(i + 1, curCandidates, total)
        }
        dfs(0, [], 0)
        return combinations
    }
}
