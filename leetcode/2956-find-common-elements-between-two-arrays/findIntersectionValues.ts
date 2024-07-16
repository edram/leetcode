function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const result = [0, 0];

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      if (num1 === num2) {
        result[0]++;
        break;
      }
    }
  }

  for (const num2 of nums2) {
    for (const num1 of nums1) {
      if (num1 === num2) {
        result[1]++;
        break;
      }
    }
  }

  return result;
}

export default findIntersectionValues;
