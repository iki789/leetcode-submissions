class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): number[] {
        let left = 0;
        let right = 0;

        while (right < nums.length) {
            if (nums[right] !== 0) {
                let tmp = nums[left]
                nums[left] = nums[right]
                nums[right] = tmp
                left += 1
            }
            right += 1
        }

        return nums
    }
}
