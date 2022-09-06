package leetcode

func twoSum(nums []int, target int) []int {
	var value []int = nil
	var valueIndexMap = make(map[int]int)

	for index, num := range nums {

		var matchNum = target - num

		if matchNumIndex, ok := valueIndexMap[matchNum]; ok {
			value = []int{matchNumIndex, index}
			break
		}

		valueIndexMap[num] = index
	}

	return value
}
