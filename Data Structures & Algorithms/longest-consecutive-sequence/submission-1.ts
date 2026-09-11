class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        /**
         * set = [2,20,4,10,3,4,5]
         * maxLenght = 3
         * curLen = 4
         * [2,20,4,10,3,4,5]
         *                ^
         */
        let maxLength = 0
        const numSet = new Set(nums)

        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let curLength = 1

                while (numSet.has(num + curLength)) {
                    curLength += 1
                }

                maxLength = Math.max(maxLength, curLength)
            }
        }
        return maxLength
    }
}