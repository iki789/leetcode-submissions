class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let largestIsland = 0
        const rowLength = grid.length
        const colLength = grid[0].length
        const visited = new Set<string>()

        for (let row = 0; row < rowLength; row++) {
            for (let col = 0; col < colLength; col++) {
                let islandSize = this.dfs(grid, row, col, visited)
                largestIsland = Math.max(largestIsland, islandSize)
            }
        }
        

        return largestIsland
    }

    dfs(grid: number[][], row: number, col: number, visited: Set<string>) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0 || visited.has(`${row},${col}`)) {
            return 0
        }
        visited.add(`${row},${col}`)
        let res = 1
        const directions = [[0,1],[1,0],[-1,0],[0,-1]]
        for (const [dr, dc] of directions) {
            res += this.dfs(grid, row + dr, col + dc, visited)
        }
        
        return res
    }
}
