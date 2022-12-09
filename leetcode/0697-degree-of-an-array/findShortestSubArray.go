package leetcode

func findShortestSubArray(nums []int) int {
	// [出现次数, 左值, 右值]
	numMap := map[int][]int{}

	for index, num := range nums {
		if arr, exists := numMap[num]; exists {
			arr[0]++
			arr[2] = index
			continue
		}

		numMap[num] = []int{1, index, index}
	}

	var minLength = 0
	var maxCount = 0

	for _, v := range numMap {
		var (
			count  = v[0]
			left   = v[1]
			right  = v[2]
			length = right - left + 1
		)

		if maxCount < count {
			maxCount = count
			minLength = length
			continue
		}
		// 判断
		if count < maxCount {
			continue
		}
		if length > minLength {
			continue
		}
		minLength = length
	}

	return minLength
}
