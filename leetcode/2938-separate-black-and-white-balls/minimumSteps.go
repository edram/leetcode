package leetcode

func minimumSteps(s string) int64 {
	var steps int64 = 0
	var blackCount int64 = 0

	for _, color := range s {
		if color == '1' {
			blackCount++
		} else {
			steps = steps + blackCount
		}
	}
	return steps
}
