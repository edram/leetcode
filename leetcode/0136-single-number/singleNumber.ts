function singleNumber(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result = result ^ num;
  }

  return result;
}

export default singleNumber;
