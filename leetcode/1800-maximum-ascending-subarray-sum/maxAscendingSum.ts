function maxAscendingSum(nums: number[]): number {
  let sum = 0;
  let maxSum = 0;
  let preNum = 0;

  for (const num of nums) {
    if (num <= preNum) {
      sum = num;
      preNum = num;
      continue;
    }

    preNum = num;
    sum = sum + num;
    maxSum = Math.max(maxSum, sum);
  }

  maxSum = Math.max(maxSum, sum);
  return maxSum;
}

export default maxAscendingSum;
