package leetcode

func satisfiesConditions(grid [][]int) bool {
	var rowLength = len(grid)
	var colLength = len(grid[0])

	for row := 0; row < rowLength; row++ {
		for col := 0; col < colLength; col++ {
			var cell = grid[row][col]

			if row < rowLength-1 {
				if cell != grid[row+1][col] {
					return false
				}
			}

			if col < colLength-1 {
				if cell == grid[row][col+1] {
					return false
				}
			}
		}
	}

	return true
}
