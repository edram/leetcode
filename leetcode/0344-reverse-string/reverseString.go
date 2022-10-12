package leetcode

func reverseString(s []byte) {
	var left = 0
	var right = len(s) - 1

	for right > left {

		s[left], s[right] = s[right], s[left]

		left++
		right--
	}
}
