package leetcode

func finalPositionOfSnake(n int, commands []string) int {
	var commandMap = map[string]int{
		"LEFT":  -1,
		"RIGHT": 1,
		"UP":    -n,
		"DOWN":  n,
	}
	var position = 0
	for _, command := range commands {
		offset := commandMap[command]
		position = position + offset
	}

	return position
}
