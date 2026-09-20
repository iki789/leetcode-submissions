class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const bracketsMap = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (const letter of s) {
            if (bracketsMap[letter]) {
                if (stack.length && stack.at(-1) === bracketsMap[letter]) {
                    stack.pop()
                } else {
                    return false
                }

            } else {
                // push
                stack.push(letter)
            }
        }
        return !stack.length
    }
}
