function twoSum(nums: number[], target: number): number[] {
  const valueIndexMap = new Map<number, number>();
  let value: number[] = [];

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]!;
    const matchNum = target - num;

    const matchNumIndex = valueIndexMap.get(matchNum);

    if (matchNumIndex != undefined) {
      value = [matchNumIndex, index];
      break;
    }

    valueIndexMap.set(num, index);
  }

  return value;
}

export default twoSum;
