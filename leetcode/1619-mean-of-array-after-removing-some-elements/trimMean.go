package leetcode

import "sort"

func trimMean(arr []int) float64 {
	sort.Ints(arr)
	var length = len(arr)
	var sum = 0
	for _, num := range arr[length/20 : length/20*19] {
		sum = sum + num
	}

	return float64(sum) / (float64(length) * 0.9)
}
