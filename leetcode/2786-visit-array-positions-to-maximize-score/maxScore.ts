function maxScore(nums: number[], x: number): number {
  let score = nums[0];
  const dp = [-Infinity, -Infinity];

  dp[score % 2] = score;

  for (let index = 1; index < nums.length; index++) {
    const num = nums[index];
    const dpIndex = num % 2;

    const cur = Math.max(dp[dpIndex] + num, dp[1 - dpIndex] + num - x);
    score = Math.max(cur, score);

    dp[dpIndex] = Math.max(dp[dpIndex], cur);
  }

  return score;
}

export default maxScore;
