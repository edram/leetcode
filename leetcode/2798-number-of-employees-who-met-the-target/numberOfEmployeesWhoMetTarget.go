package leetcode

func numberOfEmployeesWhoMetTarget(hours []int, target int) int {
	var number = 0

	for _, hour := range hours {
		if hour < target {
			continue
		}

		number++
	}

	return number
}
