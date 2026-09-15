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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        const dfs = (node1: TreeNode, node2: TreeNode) => {
            if (node1 === null && node2 === null) {
                return true
            }

            if (node1 && node2 && node1.val === node2.val) {
                return dfs(node1.left, node2.left) && dfs(node1.right, node2.right)
            } else {
                return false
            }
        }
        return dfs(p, q)
    }
}
