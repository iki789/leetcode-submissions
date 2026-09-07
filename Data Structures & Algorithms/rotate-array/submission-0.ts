class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): number[] {
        k = k % nums.length

        // reverse array
        let left = 0
        let right = nums.length - 1
        while (left < right) {
            const tmp = nums[left]
            nums[left] = nums[right]
            nums[right] = tmp
            left += 1
            right -= 1
        }

        // reverse portion after k
        left = k
        right = nums.length - 1

        while (left < right) {
            const tmp = nums[left]
            nums[left] = nums[right]
            nums[right] = tmp
            left += 1
            right -= 1
        }

        left = 0
        right = k - 1
        // reverse portion from start to k
        while (left < right) {
            const tmp = nums[left]
            nums[left] = nums[right]
            nums[right] = tmp
            left += 1
            right -= 1
        }

        return nums
    }
}
