function findErrorNums(nums: number[]): number[] {
  const result: [number, number] = [0, 0];
  const numSet = new Set<number>();

  for (const num of nums) {
    if (numSet.has(num)) {
      result[0] = num;
      continue;
    }

    numSet.add(num);
  }

  for (let miss = 1; miss <= nums.length; miss++) {
    if (numSet.has(miss)) {
      continue;
    }

    result[1] = miss;
    break;
  }

  return result;
}

export default findErrorNums;
