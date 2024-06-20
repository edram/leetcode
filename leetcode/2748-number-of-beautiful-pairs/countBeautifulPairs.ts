function countBeautifulPairs(nums: number[]): number {
  let count = 0;
  let length = nums.length;

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  for (let i = 0; i < length; i++) {
    let first = nums[i];
    while (first > 10) {
      first = Math.floor(first / 10);
    }
    for (let j = i + 1; j < length; j++) {
      const end = nums[j] % 10;

      if (gcd(first, end) === 1) {
        count++;
      }
    }
  }

  return count;
}

export default countBeautifulPairs;
