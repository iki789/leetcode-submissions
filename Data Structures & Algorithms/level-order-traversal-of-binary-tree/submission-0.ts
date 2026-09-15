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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const res = []
        if (!root) return res

        const queue = new Queue()
        queue.enqueue(root)

        /**
         * q = [2,3]
         * l = [1,2,3]
         * r = []
         */
        while (!queue.isEmpty()) {
            let level = []
            for (let i = queue.size() - 1 ; i >= 0; i--) {
                let node = queue.dequeue()
                if (node !== null) {
                    level.push(node.val)
                    queue.enqueue(node.left)
                    queue.enqueue(node.right)
                }
            }
            if (level.length > 0) {
                res.push(level)
            }
        }
        return res
    }
}
