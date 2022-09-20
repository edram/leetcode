package leetcode

import "strings"

func lengthOfLastWord(s string) int {
	var words = strings.Fields(s)
	if len(words) <= 0 {
		return 0
	}

	var lastWord = words[len(words)-1]
	return len(lastWord)
}
