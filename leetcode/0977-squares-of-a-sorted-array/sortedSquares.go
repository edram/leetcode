package leetcode

import "sort"

func sortedSquares(nums []int) []int {
	var result = make([]int, len(nums))

	for index, num := range nums {
		result[index] = num * num
	}

	sort.Ints(result)

	return result
}
