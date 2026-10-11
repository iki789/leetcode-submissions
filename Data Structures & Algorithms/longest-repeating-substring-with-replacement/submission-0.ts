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
            charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
            maxFrequency = Math.max(maxFrequency, charCount.get(s[right])!);

            while ((right - left + 1) - maxFrequency > k) {
                charCount.set(s[left], charCount.get(s[left])! - 1);
                left++;
            }

            result = Math.max(result, right - left + 1);
            right += 1
        }

        return result;
    }
}
