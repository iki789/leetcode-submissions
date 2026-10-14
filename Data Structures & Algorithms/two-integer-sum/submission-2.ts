class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const compliments = new Map<number, number>()

        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i]
            if (compliments.has(compliment)) {
                return [compliments.get(compliment)!, i]
            }
            compliments.set(nums[i], i)
        }
        return []
    }
}
