package leetcode

import "strings"

func countSegments(s string) int {
	var segmentArr = strings.Fields(s)

	return len(segmentArr)
}
