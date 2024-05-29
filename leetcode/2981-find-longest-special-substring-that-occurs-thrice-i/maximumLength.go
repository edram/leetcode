package leetcode

import "sort"

func maximumLength(s string) int {
	var length = -1
	var letterLengthsMap = map[rune][]int{}

	var lastLetter rune
	var tempLength = 1
	for _, letter := range s {
		if lastLetter == letter {
			tempLength++
		} else {
			tempLength = 1
		}

		var letterLengths = letterLengthsMap[letter]
		letterLengths = append(letterLengths, tempLength)
		sort.Slice(letterLengths, func(a, b int) bool {
			return letterLengths[b] < letterLengths[a]
		})

		if len(letterLengths) > 3 {
			letterLengths = letterLengths[:len(letterLengths)-1]
		}

		letterLengthsMap[letter] = letterLengths
		lastLetter = letter
	}

	for _, letterLengths := range letterLengthsMap {
		if len(letterLengths) >= 3 {
			length = max(length, letterLengths[2])
		}
	}

	return length
}
