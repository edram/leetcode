function majorityElement(nums: number[]): number {
  const numCountMap = new Map<number, number>();
  let maxKeyValue: [number, number] = [-1, -1];

  for (const num of nums) {
    if (numCountMap.has(num)) {
      numCountMap.set(num, numCountMap.get(num)! + 1);
      continue;
    }

    numCountMap.set(num, 1);
  }

  for (const [key, value] of numCountMap) {
    if (value <= maxKeyValue[1]) {
      continue;
    }

    maxKeyValue = [key, value];
  }

  return maxKeyValue[0];
}

export default majorityElement;
