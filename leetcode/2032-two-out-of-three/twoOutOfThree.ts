function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[]
): number[] {
  const numValueMap = new Map<number, number>();
  const result: number[] = [];

  for (const [index, nums] of [nums1, nums2, nums3].entries()) {
    const check = 1 << index;

    for (const num of nums) {
      numValueMap.set(num, (numValueMap.get(num) ?? 0) | check);
    }
  }

  for (const [num, value] of numValueMap) {
    if ((value & (value - 1)) === 0) {
      continue;
    }

    result.push(num);
  }

  return result;
}

export default twoOutOfThree;
