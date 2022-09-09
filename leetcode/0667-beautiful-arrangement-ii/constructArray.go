package leetcode

func constructArray(n int, k int) []int {
	var result = []int{}

	var limit = n - k
	for i := 1; i <= limit; i++ {
		result = append(result, i)
	}

	for max, min := n, limit+1; min <= max; max, min = max-1, min+1 {
		result = append(result, max)

		if max == min {
			continue
		}
		result = append(result, min)
	}

	return result
}
