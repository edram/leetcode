package leetcode

import (
	"regexp"
	"strings"
)

func mostCommonWord(paragraph string, banned []string) string {
	var (
		result   = ""
		maxCount = 0
	)

	var bannedMap = map[string]struct{}{}
	var wordCountMap = map[string]int{}
	var re = regexp.MustCompile(`[!?',;.]`)
	var words = strings.Fields(re.ReplaceAllString(strings.ToLower(paragraph), " "))

	for _, string := range banned {
		bannedMap[string] = struct{}{}
	}

	for _, word := range words {
		if _, banned := bannedMap[word]; banned {
			continue
		}

		if count, wordExists := wordCountMap[word]; wordExists {
			wordCountMap[word] = count + 1
			continue
		}

		wordCountMap[word] = 1
	}

	for word, count := range wordCountMap {
		if count <= maxCount {
			continue
		}

		maxCount = count
		result = word
	}

	return result
}
