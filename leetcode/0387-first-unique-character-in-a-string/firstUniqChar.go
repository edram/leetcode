package leetcode

func firstUniqChar(s string) int {
	var result = -1
	var charOnlyOnceMap = map[rune]bool{}

	for _, char := range s {

		if _, ok := charOnlyOnceMap[char]; ok {
			charOnlyOnceMap[char] = false
			continue
		}

		charOnlyOnceMap[char] = true
	}

	for index, char := range s {
		if !charOnlyOnceMap[char] {
			continue
		}

		result = index
		break
	}

	return result
}
