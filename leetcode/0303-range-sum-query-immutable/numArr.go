package leetcode

type NumArray struct {
	nums []int
}

func Constructor(nums []int) NumArray {
	return NumArray{nums: nums}
}

func (na *NumArray) SumRange(left int, right int) int {
	var sum = 0
	for index := left; index <= right; index++ {
		element := na.nums[index]

		sum = sum + element
	}

	return sum
}
