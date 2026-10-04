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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let pointer = head
        let fastPointer = head

        while (pointer && fastPointer && fastPointer.next) {
            pointer = pointer.next
            fastPointer = fastPointer.next.next

            if (pointer === fastPointer) {
                return true
            }
        }

        return false
    }
}
