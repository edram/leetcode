package leetcode

func maxAscendingSum(nums []int) int {
	var (
		maxSum = 0
		sum    = 0
		preNum = 0
	)

	for _, num := range nums {
		if num <= preNum {
			sum = num
			preNum = num
			continue
		}

		preNum = num
		sum = sum + num
		maxSum = max(maxSum, sum)
	}

	maxSum = max(maxSum, sum)

	return maxSum
}

func max(num1 int, num2 int) int {
	if num1 > num2 {
		return num1
	}

	return num2
}
