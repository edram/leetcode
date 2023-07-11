package leetcode

// dp[i]=max(dp[j])+1,其中0≤j<i且num[j]<num[i]
func lengthOfLIS(nums []int) int {
	var length = len(nums)
	if len(nums) == 0 {
		return 0
	}

	maxLength := 0
	dp := make([]int, length)

	for i := 0; i < length; i++ {
    dp[i] = 1;
		for j := 0; j < i; j++ {
			if nums[j] < nums[i] {
				dp[i] = max(dp[i], dp[j]+1)
			}
		}
		if dp[i] > maxLength {
			maxLength = dp[i]
		}
	}

	return maxLength
}

func max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}
