package leetcode

import "slices"

func findWinners(matches [][]int) [][]int {
	var lossesMap = map[int]int{}
	var result = [][]int{{}, {}}

	for _, match := range matches {
		var winner, loser = match[0], match[1]

		if _, ok := lossesMap[winner]; !ok {
			lossesMap[winner] = 0
		}

		lossesMap[loser]++
	}

	for key, count := range lossesMap {
		if count >= 2 {
			continue
		}

		result[count] = append(result[count], key)
	}

	slices.Sort(result[0])
	slices.Sort(result[1])

	return result
}
