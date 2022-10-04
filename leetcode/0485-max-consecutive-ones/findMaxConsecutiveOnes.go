package leetcode

func findMaxConsecutiveOnes(nums []int) int {
	var (
		count    = 0
		maxCount = 0
	)

	for _, num := range nums {
		if num == 1 {
			count++
			continue
		}

		maxCount = max(maxCount, count)
		count = 0
	}
	maxCount = max(maxCount, count)

	return maxCount
}

func max(num1 int, num2 int) int {

	if num1 > num2 {
		return num1
	}

	return num2
}
