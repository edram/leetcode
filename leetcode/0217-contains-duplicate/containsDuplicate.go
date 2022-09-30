package leetcode

func containsDuplicate(nums []int) bool {
	var result = false
	var numMap = map[int]struct{}{}

	for _, num := range nums {
		if _, ok := numMap[num]; ok {
			result = true
			break
		}

		numMap[num] = struct{}{}
	}

	return result
}
