function pivotIndex(nums: number[]): number {
  let index = -1;
  let sum = 0;
  let leftSum = 0;

  for (const num of nums) {
    sum = sum + num;
  }

  for (const [i, num] of nums.entries()) {
    const rightSum = sum - leftSum - num;

    if (rightSum === leftSum) {
      index = i;
      break;
    }

    leftSum = leftSum + num;
  }

  return index;
}

export default pivotIndex;
