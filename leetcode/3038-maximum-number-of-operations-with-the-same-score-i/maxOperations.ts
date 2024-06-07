function maxOperations(nums: number[]): number {
  let times = 1;
  const sum = nums[0] + nums[1];

  for (let index = 2; index < nums.length - 1; index = index + 2) {
    if (nums[index] + nums[index + 1] != sum) {
      break;
    }
    times++;
  }

  return times;
}

export default maxOperations;
