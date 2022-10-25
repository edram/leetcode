package leetcode

func pivotIndex(nums []int) int {
	var index = -1
	var sum = 0
	var leftSum = 0
	for _, num := range nums {
		sum = sum + num
	}

	for i, num := range nums {
		var rightSum = sum - leftSum - num

		if rightSum == leftSum {
			index = i
			break
		}

		leftSum = leftSum + num
	}

	return index
}
