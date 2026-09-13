class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     * [1,2,5,0,0,0]
     *        L
     *             R
     */
    moveZeroes(nums: number[]): number[] {
        let left = 0;
        let right = 0;

        while (right < nums.length) {
            if (nums[right] !== 0) {
                const tmp = nums[left]
                nums[left] = nums[right]
                nums[right] = tmp
                left += 1
            }

            right += 1
        }

        return nums
    }
}
