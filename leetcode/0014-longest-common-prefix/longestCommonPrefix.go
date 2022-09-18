package leetcode

func longestCommonPrefix(strs []string) string {
	var prefix = ""
	if len(strs) < 1 {
		return prefix
	}

	var checkStr = strs[0]

	for index, letter := range checkStr {
		for strIndex, str := range strs {
			if strIndex == 0 {
				continue
			}

			if index >= len(str) || str[index] != byte(letter) {
				return prefix
			}
		}

		prefix = prefix + string(letter)
	}

	return prefix
}
