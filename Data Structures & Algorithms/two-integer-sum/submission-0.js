class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complementMap = new Map()

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]
            if (complementMap.has(complement)) {
                return [complementMap.get(complement), i]
            }
            complementMap.set(nums[i], i)
        }
        return []
    }
}
