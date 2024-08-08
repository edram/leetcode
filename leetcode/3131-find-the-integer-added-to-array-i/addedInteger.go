package leetcode

import "slices"

func addedInteger(nums1 []int, nums2 []int) int {
	return slices.Max(nums2) - slices.Max(nums1)
}
