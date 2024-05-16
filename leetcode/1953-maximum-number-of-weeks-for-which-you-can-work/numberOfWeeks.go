package leetcode

func numberOfWeeks(milestones []int) int64 {
	var restWeeks int64 = 0
	var longestWeeks int64 = 0

	for _, milestone := range milestones {
		longestWeeks = max(longestWeeks, int64(milestone))
		restWeeks = restWeeks + int64(milestone)
	}

	restWeeks = restWeeks - int64(longestWeeks)

	if longestWeeks > restWeeks+1 {
		longestWeeks = restWeeks + 1
	}

	return restWeeks + longestWeeks
}
