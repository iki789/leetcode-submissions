/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let maxHeightDifference = 0
        const dfs = (node: TreeNode) => {
            if (node === null) {
                return 0
            }

            const leftHeight = dfs(node.left)
            const rightHeight = dfs(node.right)

            maxHeightDifference = Math.max(Math.abs(leftHeight - rightHeight), maxHeightDifference)
            return 1 + Math.max(leftHeight, rightHeight)
        }
        dfs(root)
        return maxHeightDifference <= 1
    }
}
