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
        
        const numberOfGoodNodesDFS = (node: TreeNode, maxValue: number): number => {
            if (node === null) {
                return 0
            }

            let numberOfGoodNodes = node.val >= maxValue ? 1 : 0
            maxValue = Math.max(node.val, maxValue)
            numberOfGoodNodes += numberOfGoodNodesDFS(node.left, maxValue)
            numberOfGoodNodes += numberOfGoodNodesDFS(node.right, maxValue)
            return numberOfGoodNodes
        }

        return numberOfGoodNodesDFS(root, root.val)
    }
}
