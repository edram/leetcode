package leetcode

func uniqueLetterString(s string) int {
	var letterIndexesMap = make(map[rune][]int)
	var result = 0
	var stringLength = len(s)

	for index, letter := range s {
		letterIndexesMap[letter] = append(letterIndexesMap[letter], index)
	}

	for _, letterIndexes := range letterIndexesMap {
		for index, current := range letterIndexes {
			var start int
			var end int
			if index == 0 {
				start = 0
			} else {
				start = letterIndexes[index-1] + 1
			}
			if index == len(letterIndexes)-1 {
				end = stringLength - 1
			} else {
				end = letterIndexes[index+1] - 1
			}

			result = result + (current-start+1)*(end-current+1)
		}
	}

	return result
}
