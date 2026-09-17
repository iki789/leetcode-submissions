class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid: number[][]): number {
        const rows = grid.length
        const cols = grid[0].length
        const visited = new Set<string>()
        const dfs = (row: number, col: number, visited: Set<string>): number => {
            if (row < 0 || row >= rows || col < 0 || col >= cols || visited.has(`${row},${col}`) || grid[row][col] === 1) {
                return 0
            }
            if (row === rows - 1 && col === cols - 1) {
                return 1
            }

            visited.add(`${row},${col}`)
            let result = 0
            for (const [dr, dc] of [[0,1],[1,0],[0,-1],[-1,0]]) {
                result += dfs(row + dr, col + dc, visited)
            }
            
            visited.delete(`${row},${col}`)
            return result
        }

       
        const uniquePathsCount = dfs(0, 0, visited)
        return uniquePathsCount
         
    }
}
