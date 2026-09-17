class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid: number[][]): number {
        const rowsLength = grid.length
        const colsLength = grid[0].length

        if (grid[0][0] === 1 || grid[rowsLength - 1][colsLength - 1] === 1) {
            return -1
        }

        const queue = new Queue()
        const visited = new Set<string>()
        visited.add(`${0},${0}`)
        queue.enqueue([0,0])
        let length = 0
        while (!queue.isEmpty()) {
            const level = queue.size()
            for (let i = 0; i < level; i++) {
                const [row, col] = queue.dequeue()
                if (row === rowsLength - 1 && col === colsLength - 1) {
                    return length
                }

                for (const [dr, dc] of [[1,0],[0,-1],[-1,0],[0,1]]) {
                    const newRow = dr + row
                    const newCol = dc + col
                    
                    if (newRow < 0 || newRow >= rowsLength || newCol < 0 || newCol >= colsLength || visited.has(`${newRow},${newCol}`)) {
                        continue
                    }

                    if (grid[newRow][newCol] === 0) {
                        queue.enqueue([newRow, newCol])
                        visited.add(`${newRow},${newCol}`)
                    }
                }
            }
            length += 1
        }
        return -1
    }
}
