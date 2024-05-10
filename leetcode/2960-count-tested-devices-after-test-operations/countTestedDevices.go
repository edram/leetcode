package leetcode

func countTestedDevices(batteryPercentages []int) int {
	var count = 0

	for _, percentage := range batteryPercentages {
		if percentage > count {
			count++
		}
	}

	return count
}
