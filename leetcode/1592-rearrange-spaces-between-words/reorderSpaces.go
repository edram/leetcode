package leetcode

import (
	"fmt"
	"strings"
)

func reorderSpaces(text string) string {
	var words = strings.Fields(text)
	var wordsCount = len(words)
	var spaceCount = strings.Count(text, " ")

	if wordsCount <= 1 {
		return fmt.Sprintf("%s%s", strings.Join(words, ""), strings.Repeat(" ", spaceCount))
	}

	var betweenSpaceCount = spaceCount / (wordsCount - 1)
	var restSpace = spaceCount % (wordsCount - 1)

	return fmt.Sprintf("%s%s", strings.Join(words, strings.Repeat(" ", betweenSpaceCount)), strings.Repeat(" ", restSpace))
}
