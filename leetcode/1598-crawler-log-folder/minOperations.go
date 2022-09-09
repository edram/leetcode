package leetcode

func minOperations(logs []string) int {
	var step = 0
	for _, log := range logs {
		if log == "./" {
			continue
		}

		if log == "../" {
			if step > 0 {
				step--
			}
			continue
		}

		step++
	}

	return step
}
