class Solution {
  /**
   * @param {character[][]} board
   * @param {string} word
   * @return {boolean}
   */

  exist(board: string[][], word: string): boolean {
    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    const rowsLength = board.length;
    const colsLength = board[0].length;

    const dfs = (row: number, col: number, wordIndex: number) => {
      if (
        row < 0 ||
        row >= rowsLength ||
        col < 0 ||
        col >= colsLength ||
        board[row][col] !== word[wordIndex] ||
        board[row][col] === "#"
      ) {
        return false;
      }

      if (wordIndex === word.length - 1) {
            return true;
        }

      board[row][col] = "#";
      for (const [dr, dc] of directions) {
        if (dfs(row + dr, col + dc, wordIndex + 1)) {
          return true;
        }
      }
      board[row][col] = word[wordIndex]
      return false
    };

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        if (dfs(row, col, 0)) {
            return true
        }
      }
    }
    return false
  }
}
