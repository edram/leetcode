/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0;

  for (const [right, number] of nums.entries()) {
    if (number == 0) {
      continue;
    }

    [nums[right]!, nums[left]!] = [nums[left]!, nums[right]!];
    left++;
  }
}

export default moveZeroes;
