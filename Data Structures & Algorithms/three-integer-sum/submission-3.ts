class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b)
        const result: number[][] = []


        for (let i = 0; i < nums.length; i++) {
            let left = i + 1
            let right = nums.length - 1
            if (i > 0 && nums[i] === nums[i-1]) continue
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right]
                if (sum > 0) {
                    right -= 1
                } else if (sum < 0) {
                    left += 1
                } else {
                    result.push([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while (left < right && nums[left] === nums[left - 1]) {
                        left += 1
                    }
                }
            }
        }
        return result
    }
}
