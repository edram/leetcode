package leetcode

import "math"

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	var length = 1

	for x >= int(math.Pow(10, float64(length))) {
		length++
	}
	var (
		left  = length
		right = 1
	)

	for left > right {
		var leftNumber = x / int(math.Pow(10, float64(left-1))) % 10

		var rightNumber = x % int(math.Pow(10, float64(right))) / int(math.Pow(10, float64(right-1)))

		if leftNumber != rightNumber {
			return false
		}

		left--
		right++
	}

	return true
}
