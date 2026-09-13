class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result:number[] = Array.from({length: nums.length}, () => 0)
        /**
         * [1,2,4,6]
         *  ^
         * prefix = 2
         * postfix = 6
         * output = [48,24,12,8]
         * 
         */
        
        const output = Array.from<number>({length: nums.length})

        let prefix:number = 1
        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix
            prefix *= nums[i]
        }

        let postfix: number = 1
        for (let i = nums.length -1; i >= 0; i--) {
            output[i] *= postfix
            postfix *= nums[i]
        }
        return output
    }
}
