package leetcode

func maxOperations(nums []int) int {
	var times = 1
	var sum = nums[0] + nums[1]

	for i := 2; i < len(nums)-1; i = i + 2 {
		if nums[i]+nums[i+1] != sum {
			break
		}

		times++
	}

	return times
}
