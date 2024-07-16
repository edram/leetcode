package leetcode

func findIntersectionValues(nums1 []int, nums2 []int) []int {
	var result = make([]int, 2)

	for _, num1 := range nums1 {
		for _, num2 := range nums2 {
			if num1 == num2 {
				result[0]++
				break
			}
		}
	}

	for _, num2 := range nums2 {
		for _, num1 := range nums1 {
			if num1 == num2 {
				result[1]++
				break
			}
		}
	}

	return result
}
