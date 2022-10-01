function missingNumber(nums: number[]): number {
  let result = 0;
  const numberSet = new Set<number>();
  for (const num of nums) {
    numberSet.add(num);
  }

  for (let index = 0; index <= nums.length; index++) {
    if (numberSet.has(index)) {
      continue;
    }

    result = index;
    break;
  }

  return result;
}

export default missingNumber;
