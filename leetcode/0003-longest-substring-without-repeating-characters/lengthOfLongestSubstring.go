package leetcode

func lengthOfLongestSubstring(s string) int {
	var letterMap = make(map[byte]bool)
	var leftIndex = 0
	var maxLength = 0

	for rightIndex := 0; rightIndex < len(s); rightIndex++ {
		var letter = s[rightIndex]
		for letterMap[letter] {

			delete(letterMap, s[leftIndex])
			leftIndex++
		}

		letterMap[letter] = true
		maxLength = max(maxLength, len(letterMap))
	}

	return maxLength
}

func max(x, y int) int {
	if x < y {
		return y
	}
	return x
}
