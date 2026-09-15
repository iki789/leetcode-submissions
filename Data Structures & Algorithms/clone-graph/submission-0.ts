/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     * 
     */
    cloneGraph(node: Node | null): Node {
        if (node === null) return null
        const newMap  = new Map<Node, Node>()
        newMap.set(node, new Node(node.val))

        const queue = new Queue()
        queue.push(node)

        while (!queue.isEmpty()) {
            const cur = queue.pop()
            if (cur.neighbors) {
                for (const neighbor of cur.neighbors) {
                    if (!newMap.has(neighbor)) {
                        newMap.set(neighbor, new Node(neighbor.val))
                        queue.push(neighbor)
                    }
                    newMap.get(cur).neighbors.push(newMap.get(neighbor))
                }
            }
        }

        return newMap.get(node)
        
    }
}
