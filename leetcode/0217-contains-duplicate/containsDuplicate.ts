function containsDuplicate(nums: number[]): boolean {
  const numSet = new Set<number>();
  let result = false;

  for (const num of nums) {
    if(numSet.has(num)){
      result = true;
      break;
    }

    numSet.add(num);
  }

  return result;
}

export default containsDuplicate;
