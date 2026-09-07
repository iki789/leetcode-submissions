class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): string[] {
        let start = 0
        let end = s.length - 1

        while (start < end) {
            const tmp = s[start]
            s[start] = s[end]
            s[end] = tmp
            start += 1
            end -= 1
        }
        return s
    }
}
