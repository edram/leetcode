package leetcode

func isValid(s string) bool {
	var stack = []rune{}
	var parenthesesMap = map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}

	for _, parentheses := range s {
		matchParenthese, ok := parenthesesMap[parentheses]
		if !ok {
			stack = append(stack, parentheses)
			continue
		}

		if len(stack) < 1 || stack[len(stack)-1] != matchParenthese {
			stack = append(stack, parentheses)
			continue
		}

		stack = stack[:len(stack)-1]
	}

	return len(stack) == 0
}
