class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0
        let right = nums.length - 1
        let minValue = Number.MAX_SAFE_INTEGER

        while (left <= right) {
            // if array is sorted
            if (nums[left] <= nums[right]) {
                minValue = Math.min(minValue, nums[left])
                break
            }
            const mid = left + Math.floor((right - left) / 2)
            minValue = Math.min(minValue, nums[mid])
            // if array is not sorted
            if (nums[mid] >= nums[left]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return minValue !== Number.MAX_SAFE_INTEGER ? minValue : -1
    }
}
