package leetcode

import "sort"

func minRectanglesToCoverPoints(points [][]int, w int) int {
	sort.Slice(points, func(i, j int) bool {
		return points[i][0] < points[j][0]
	})

	var count = 0
	var next = -1

	for _, point := range points {
		var x = point[0]
		if x > next {
			next = x + w
			count++
		}
	}
	return count
}
