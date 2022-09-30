function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let result = false;
  const numIndexMap = new Map<number, number>();

  for (const [index, num] of nums.entries()) {
    if (numIndexMap.has(num) && index - numIndexMap.get(num)! <= k) {
      result = true;
      break;
    }

    numIndexMap.set(num, index);
  }

  return result;
}

export default containsNearbyDuplicate;
