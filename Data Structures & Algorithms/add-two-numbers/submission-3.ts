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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        const resultList = new ListNode()
        let cur = resultList
        let carryValue = 0

        while (l1 || l2 || carryValue) {
            const node1Value = l1?.val || 0
            const node2Value = l2?.val || 0

            const value = node1Value + node2Value + carryValue
            carryValue = Math.floor(value / 10)
            const remainder = value % 10

            cur.next = new ListNode(remainder)
            cur = cur.next

            l1 = l1?.next
            l2 = l2?.next

        }

        return resultList.next

    }
}
