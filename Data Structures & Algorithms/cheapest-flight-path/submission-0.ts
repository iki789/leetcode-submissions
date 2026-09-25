class Solution {
  /**
   * @param {number} n
   * @param {number[][]} flights
   * @param {number} src
   * @param {number} dst
   * @param {number} k
   * @return {number}
   */
  findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number) {
    const flightsMap = new Map<number, { to: number; cost: number }[]>();
    for (const [src, dst, cost] of flights) {
      if (!flightsMap.has(src)) {
        flightsMap.set(src, []);
      }
      flightsMap.get(src)!.push({ to: dst, cost: cost });
    }

    const queue = new Queue();
    queue.enqueue({ src, cost: 0, stops: 0 });
    const costs = new Map<number, number>();

    while (!queue.isEmpty()) {
      const cur = queue.dequeue();
      if (cur.stops > k) continue;

      const neigbhors = flightsMap.get(cur.src);
      if (neigbhors) {
        for (const neigbhor of neigbhors) {
          const newCost = cur.cost + neigbhor.cost;
          const oldCost = costs.get(neigbhor.to);
          if (oldCost === undefined || newCost < oldCost) {
            queue.enqueue({
              src: neigbhor.to,
              cost: newCost,
              stops: cur.stops + 1,
            });
            costs.set(neigbhor.to, newCost)
          }
        }
      }
    }

    if (!costs.has(dst)) return -1

    return costs.get(dst)
  }
}
