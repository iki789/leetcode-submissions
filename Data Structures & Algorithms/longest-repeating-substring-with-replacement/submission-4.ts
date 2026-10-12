class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let right = 0
        let maxFrequency = 0;
        let result = 0;
        const charCount = new Map<string, number>();

        while (right < s.length) {
            const curCharCount = charCount.get(s[right]) || 0
            const updatedCharCount = curCharCount + 1
            charCount.set(s[right], updatedCharCount)

            maxFrequency = Math.max(maxFrequency, updatedCharCount)

            while ((right - left + 1) - maxFrequency > k) {
                charCount.set(s[left], charCount.get(s[left])! - 1)
                left += 1
            }
            result = Math.max(right - left + 1, result)
            right += 1
        }

        return result
    }
}
