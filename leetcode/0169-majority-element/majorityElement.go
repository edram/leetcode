package leetcode

func majorityElement(nums []int) int {
	var numCountMap = map[int]int{}
	var maxKeyValue = []int{-1, -1}

	for _, num := range nums {

		if count, ok := numCountMap[num]; ok {
			numCountMap[num] = count + 1
			continue
		}

		numCountMap[num] = 1
	}

	for key, value := range numCountMap {
		if value <= maxKeyValue[1] {
			continue
		}

		maxKeyValue = []int{key, value}
	}

	return maxKeyValue[0]
}
