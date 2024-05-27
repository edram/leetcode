package leetcode

func missingRolls(rolls []int, mean int, n int) []int {
	var result = []int{}
	var missingSum = mean * (n + len(rolls))
	for _, roll := range rolls {
		missingSum = missingSum - roll
	}

	if missingSum >= n && missingSum <= 6*n {
		var avg = missingSum / n
		var rest = missingSum % n

		for i := 1; i <= n; i++ {
			if i <= rest {
				result = append(result, avg+1)
			} else {
				result = append(result, avg)
			}
		}
	}

	return result
}
