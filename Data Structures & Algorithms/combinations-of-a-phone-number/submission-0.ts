class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */

    private lettersMap = {
        0: [""],
        1: [""],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    } as {[key: number]: string[]}

    letterCombinations(digits: string): string[] {
        if (digits.length === 0) {
            return []
        }
        const result: string[] = []
        const dfs = (i: number, curStr: string) => {
            if (curStr.length === digits.length) {
                result.push(curStr)
                return
            }

            for (const char of this.lettersMap[digits[i]]) {
                dfs(i + 1, curStr + char)
            }
        }
        dfs(0, '')
        return result
    }
}
