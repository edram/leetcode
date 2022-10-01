package leetcode

func missingNumber(nums []int) int {
	var result = 0
	var numMap = map[int]struct{}{}

	for _, num := range nums {
		numMap[num] = struct{}{}
	}

	for i := 0; i <= len(nums); i++ {
		if _, ok := numMap[i]; ok {
			continue
		}

		result = i
		break
	}

	return result
}
