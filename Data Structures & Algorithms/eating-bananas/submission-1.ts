class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 0
        let right = Math.max(...piles)
        let minHours = right

        while (left <= right) {
            const k = Math.floor((right + left) / 2)
            let curEatingHours = 0
            for (let pile of piles) {
                curEatingHours += Math.ceil(pile / k)
            }

            if (curEatingHours <= h) {
                minHours = Math.min(minHours, k)
                right = k - 1
            } else {
                left = k + 1
            }
        }

        return minHours
    }
}
