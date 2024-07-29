package leetcode

import "strconv"

func calPoints(operations []string) int {
	var point, points = 0, []int{}

	for _, operation := range operations {
		var length = len(points)
		if operation == "+" {
			var round = points[length-1] + points[length-2]
			points = append(points, round)
			point = point + round
			continue
		}

		if operation == "D" {
			var round = points[length-1] * 2
			points = append(points, round)
			point = point + round
			continue
		}

		if operation == "C" {
			var rm = points[length-1]
			point = point - rm
			points = points[:length-1]
			continue
		}

		round, _ := strconv.Atoi(operation)
		points = append(points, round)
		point = point + round
	}

	return point
}
