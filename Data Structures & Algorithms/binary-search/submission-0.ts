class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0
        let right = nums.length - 1
        /**
         * [-1,0,2,4,6,8]
         *   l   m    r
         *       
         */
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)
            if (nums[mid] < target) {
                left = mid + 1
            } else if (nums[mid] > target){
                right = mid - 1
            } else {
                return mid
            }
        }

        return -1

    }
}
