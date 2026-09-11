class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencies: {[key: number]: number} = {}

        for (const num of nums) {
            frequencies[num] = (frequencies[num] || 0) + 1
        }
        
        const pq = new PriorityQueue((a, b) => a[1] - b[1])
        for (const [num, count] of Object.entries(frequencies)) {
            pq.enqueue([num, count])
            while (pq.size() > k) {
                pq.dequeue()
            }
        }
        
        const result: number[] = []
        while (!pq.isEmpty()) {
            const [num] = pq.dequeue()
            result.push(num)
        }
        return result
    }
}
