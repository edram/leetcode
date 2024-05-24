function mostCompetitive(nums: number[], k: number): number[] {
  const result: number[] = [];
  for (const [index, num] of nums.entries()) {
    while (result.length > 0 && result[result.length - 1] > num) {
      if (nums.length - index + 1 + result.length - 1 > k) {
        result.pop();
      } else {
        break;
      }
    }

    if (result.length < k) {
      result.push(num);
    }
  }

  return result;
}

export default mostCompetitive;
