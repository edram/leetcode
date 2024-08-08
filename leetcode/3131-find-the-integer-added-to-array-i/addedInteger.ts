function addedInteger(nums1: number[], nums2: number[]): number {
  return Math.max(...nums2) - Math.max(...nums1);
}

export default addedInteger;
