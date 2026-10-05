/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const dummyNode = new ListNode(0, head)
        let left = dummyNode
        let right = head
        
        // create gap from left to right by n
        while (right && n > 0) {
            right = right.next
            n -= 1
        }

        // move left and right maintaining the window
        while (right) {
            left = left.next
            right = right.next
        }

        // delete the node
        left.next = left.next?.next
        return dummyNode.next
    }
}
