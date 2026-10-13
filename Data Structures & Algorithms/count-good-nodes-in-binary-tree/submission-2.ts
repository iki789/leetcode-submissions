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
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        
        const dfs = (node: TreeNode, maxValue: number): number => {
            if (node === null) {
                return 0
            } 

            let goodNodesCount = node.val >= maxValue ? 1 : 0
            maxValue = Math.max(node.val, maxValue)
            goodNodesCount += dfs(node.left, maxValue)
            goodNodesCount += dfs(node.right, maxValue)

            return goodNodesCount
        }

        return dfs(root, root.val)
    }
}
