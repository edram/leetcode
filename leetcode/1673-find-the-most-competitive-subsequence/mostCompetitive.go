package leetcode

func mostCompetitive(nums []int, k int) []int {
	var result = []int{}

	for index, num := range nums {
		for len(result) > 0 && result[len(result)-1] > num {
			if len(nums)-index+1+len(result)-1 > k {
				result = result[:len(result)-1]
			} else {
				break
			}
		}

		if len(result) < k {
			result = append(result, num)
		}
	}

	return result
}
