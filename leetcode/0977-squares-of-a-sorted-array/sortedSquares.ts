function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];

  for (const num of nums) {
    result.push(num * num);
  }

  return result.sort((a, b) => a - b);
}

export default sortedSquares;
