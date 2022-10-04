package leetcode

func findTheDifference(s string, t string) byte {
	var result byte
	var letterCountMap = map[rune]int{}

	for _, letter := range s {
		if count, ok := letterCountMap[letter]; ok {
			letterCountMap[letter] = count + 1
			continue
		}

		letterCountMap[letter] = 1
	}

	for _, letter := range t {
		var count, ok = letterCountMap[letter]

		if !ok || count <= 0 {
			result = byte(letter)
			break
		}

		letterCountMap[letter] = count - 1
	}

	return result
}
