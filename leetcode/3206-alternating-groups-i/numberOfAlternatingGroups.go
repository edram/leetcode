package leetcode

func numberOfAlternatingGroups(colors []int) int {
	length := len(colors)
	result := 0
	for index := 0; index < length; index++ {
		start := (index - 1 + length) % length
		end := (index + 1) % length

		color := colors[index]

		if color != colors[start] && color != colors[end] {
			result++
		}
	}

	return result
}
