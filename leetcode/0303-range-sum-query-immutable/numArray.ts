class NumArray {
  private nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  public sumRange(left: number, right: number): number {
    let sum = 0;

    for (let index = left; index <= right; index++) {
      const element = this.nums[index];
      sum = sum + element;
    }

    return sum;
  }
}

export default NumArray;
