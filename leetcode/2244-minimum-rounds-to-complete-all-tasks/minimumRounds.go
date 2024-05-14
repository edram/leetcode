package leetcode

func minimumRounds(tasks []int) int {
	var rounds = 0
	var taskCountMap = make(map[int]int)

	for _, task := range tasks {
		taskCountMap[task]++
	}

	for _, task := range taskCountMap {
		if task == 1 {
			rounds = -1
			break
		}

		if task%3 == 0 {
			rounds += task / 3
		} else {
			rounds = rounds + task/3 + 1
		}
	}

	return rounds
}
