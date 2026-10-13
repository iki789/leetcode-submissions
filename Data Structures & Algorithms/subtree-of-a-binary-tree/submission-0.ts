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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!subRoot) {
            return true;
        }
        if (!root) {
            return false;
        }

        if (this.isSameSubTree(root, subRoot)) {
            return true;
        }
        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }

    isSameSubTree(tree: TreeNode, subTree: TreeNode) {
        if (tree === null && subTree === null) {
            return true
        }

        if (tree && subTree && tree.val === subTree.val) {
            return this.isSameSubTree(tree.left, subTree.left) && this.isSameSubTree(tree.right, subTree.right)
        }

        return false
        
    }
}
