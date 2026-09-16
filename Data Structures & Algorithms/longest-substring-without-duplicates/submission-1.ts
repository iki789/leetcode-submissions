class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0
        let right = 0
        const seen = new Set()
        let maxLength = 0

        while (right < s.length) {
            while (seen.has(s[right])) {
                seen.delete(s[left])
                left += 1
            }
            seen.add(s[right])
            maxLength = Math.max(maxLength, right - left + 1)
            right += 1
        }

        return maxLength
    }
}
