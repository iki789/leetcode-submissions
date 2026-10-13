class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        /**
         * [0,2,0,3,1,0,1,3,2,1]
         *              ^ ^
         * L = 3
         * R = 3
         * result = 9
         */

        let left = 0
        let right = height.length - 1
        let maxLeft = height[left]
        let maxRight = height[right]
        let trappedWater = 0

        while (left < right) {
            if (height[left] < height[right]) {
                maxLeft = Math.max(maxLeft, height[left])
                trappedWater += maxLeft - height[left]
                left += 1
            } else {
                maxRight = Math.max(maxRight, height[right])
                trappedWater += maxRight - height[right]
                right -= 1
            }
        }
        return trappedWater
    }
}
