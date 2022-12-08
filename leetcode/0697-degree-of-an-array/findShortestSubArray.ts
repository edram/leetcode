function findShortestSubArray(nums: number[]): number {
  // [出现次数, 左值, 右值]
  const map = new Map<number, [number, number, number]>();

  for (const [index, num] of nums.entries()) {
    if (map.has(num)) {
      const arr = map.get(num)!;
      arr[0]++;
      arr[2] = index;
      continue;
    }

    map.set(num, [1, index, index]);
  }

  let minLength = 0;
  let maxCount = 0;

  for (const [count, left, right] of map.values()) {
    const length = right - left + 1;
    if (maxCount < count) {
      maxCount = count;
      minLength = length;
      continue;
    }

    // 判断
    if (count < maxCount) {
      continue;
    }
    if (length > minLength) {
      continue;
    }
    minLength = length;
  }

  return minLength;
}

export default findShortestSubArray;
