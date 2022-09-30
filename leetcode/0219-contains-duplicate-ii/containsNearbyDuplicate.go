package leetcode

func containsNearbyDuplicate(nums []int, k int) bool {
	var result = false
	var numIndexMap = map[int]int{}

	for index, num := range nums {

		if leftIndex, ok := numIndexMap[num]; ok && index-leftIndex <= k {
			result = true
			break
		}

		numIndexMap[num] = index
	}

	return result
}
