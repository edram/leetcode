package leetcode

func isIsomorphic(s string, t string) bool {
	var result = true

	var s2t = map[byte]byte{}
	var t2s = map[byte]byte{}

	for i := 0; i < len(s); i++ {
		var tString = t[i]
		var sString = s[i]

		t1, isT1Exists := s2t[sString]
		s1, isS1Exists := t2s[tString]

		if (isT1Exists && t1 != tString) || (isS1Exists && s1 != sString) {
			result = false
			break
		}

		s2t[sString] = tString
		t2s[tString] = sString
	}

	return result
}
