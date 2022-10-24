package leetcode

func findErrorNums(nums []int) []int {
	var result = make([]int, 2)
	var numSet = map[int]struct{}{}

	for _, num := range nums {
		if _, exists := numSet[num]; exists {
			result[0] = num
			continue
		}

		numSet[num] = struct{}{}
	}

	for miss := 1; miss <= len(nums); miss++ {
		if _, exists := numSet[miss]; exists {
			continue
		}

		result[1] = miss
		break
	}

	return result
}
