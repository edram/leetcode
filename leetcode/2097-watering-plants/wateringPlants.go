package leetcode

func wateringPlants(plants []int, capacity int) int {
	var steps = 0
	var rest = capacity

	for index, plant := range plants {
		if rest >= plant {
			steps = steps + 1
			rest = rest - plant
		} else {
			steps = steps + 2*index + 1
			rest = capacity - plant
		}
	}

	return steps
}
