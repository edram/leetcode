package leetcode

func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}

func countBeautifulPairs(nums []int) int {
	var count = 0
	var length = len(nums)

	for i := 0; i < length; i++ {
		var first = nums[i]
		for first >= 10 {
			first = first / 10
		}

		for j := i + 1; j < length; j++ {
			var end = nums[j] % 10
			if gcd(first, end) == 1 {
				count++
			}
		}
	}

	return count
}
