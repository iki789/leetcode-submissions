class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0
        let right = height.length - 1
        let maxLeft = height[left]
        let maxRight = height[right]
        let trappedWater = 0

        while (left < right) {
            if (height[left] < height[right]) {
                maxLeft = Math.max(height[left], maxLeft)
                trappedWater += maxLeft - height[left] 
                left += 1
            } else{
                maxRight = Math.max(height[right], maxRight)
                trappedWater += maxRight - height[right] 
                right -= 1
            }
        }
        return trappedWater
    }
}
