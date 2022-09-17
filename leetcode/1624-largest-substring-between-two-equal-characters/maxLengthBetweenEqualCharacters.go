package leetcode

func maxLengthBetweenEqualCharacters(s string) int {
	var letterFirstIndexMap = make(map[rune]int)
	var length = -1

	for index, letter := range s {
		if firstIndex, ok := letterFirstIndexMap[letter]; ok {
			length = max(length, index-firstIndex-1)
			continue
		}

		letterFirstIndexMap[letter] = index
	}

	return length
}

func max(first int, current int) int {
	if first > current {
		return first
	}
	return current
}
