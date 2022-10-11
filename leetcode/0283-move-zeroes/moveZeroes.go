package leetcode

func moveZeroes(nums []int) {
	var left = 0

	for right, num := range nums {
		if num == 0 {
			continue
		}

		nums[left], nums[right] = nums[right], nums[left]
		left++
	}
}
