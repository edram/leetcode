function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let count = 0;

  for (const num of nums) {
    if (num === 1) {
      count++;
      continue;
    }

    maxCount = Math.max(maxCount, count);
    count = 0;
  }

  maxCount = Math.max(maxCount, count);

  return maxCount;
}

export default findMaxConsecutiveOnes;
