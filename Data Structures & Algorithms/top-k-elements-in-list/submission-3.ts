class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        /**
         * [1,2,4,4,5,5,5]
         * [1: 1, 2: 1, 4:2, 5:3]
         * 
         */

        const frequencies: {[key: number]: number} = {}

        for (let num of nums) {
            frequencies[num] = (frequencies[num] || 0)+ 1
        }

        const heap = new MinPriorityQueue((x) => x[1]);
        for (const [num, count] of Object.entries(frequencies)) {
            heap.enqueue([num, count])
            if (heap.size() > k) heap.dequeue()
        }

        const frequentElements: number[] = []
        for (let i = 0; i < k; i++) {
            const [num] = heap.dequeue()
            frequentElements.push(num)
        }

        return frequentElements
    }
}
