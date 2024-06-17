package leetcode

func findLUSlength(a string, b string) int {
	var length = -1

	if a != b {
		length = max(len(a), len(b))
	}
	return length
}
