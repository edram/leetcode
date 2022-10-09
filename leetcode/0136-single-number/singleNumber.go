package leetcode

func singleNumber(nums []int) int {
	var result = 0

	for _, num := range nums {
		result = result ^ num
	}

	return result
}
