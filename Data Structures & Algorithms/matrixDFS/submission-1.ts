class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid: number[][]): number {
        const rowsLength = grid.length
        const colsLength = grid[0].length
        const visited = new Set<string>()

        const dfs = (row: number, col: number): number => {
            if (row < 0 || row >= rowsLength || col < 0 || col >= colsLength || visited.has(`${row},${col}`) || grid[row][col] === 1) {
                return 0
            }
            if (row === rowsLength - 1 && col === colsLength - 1) {
                return 1
            }
            visited.add(`${row},${col}`)

            let uniquePaths = 0
            for (let [dr, dc] of [[0,1],[1,0],[0,-1],[-1,0]]){
                uniquePaths += dfs(row + dr, col + dc)
            }
            visited.delete(`${row},${col}`)
            return uniquePaths
        }

        return dfs(0,0)         
    }
}
