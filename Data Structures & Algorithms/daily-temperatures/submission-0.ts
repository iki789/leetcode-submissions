class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        /**
         * temps = [30,38,30,36,35,40,28]
         *                            ^
         * stack = [[40,5],[20,6]]
         * result = [1,4,1,2,1,0,0]
         */
        const stack: [number, number][] = []
        const result = Array.from({length: temperatures.length}, () => 0)

        for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i]
            while (stack.length && stack.at(-1)[0] < temp) {
                const [_, prevIdx] = stack.pop()
                result[prevIdx] =  i - prevIdx
            }
            stack.push([temp, i])
        }
        return result
    }
}
