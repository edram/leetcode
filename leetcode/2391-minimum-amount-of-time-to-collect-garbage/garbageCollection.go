package leetcode

func garbageCollection(garbage []string, travel []int) int {
	var minutes = 0
	var (
		garbageMinutes    = 0
		travelMinutesMap  = make(map[rune]int)
		temptravelMinutes = 0
	)

	for index, garbageItems := range garbage {

		garbageMinutes = garbageMinutes + len(garbageItems)

		if index > 0 {
			temptravelMinutes = temptravelMinutes + travel[index-1]
		}

		for _, garbageItem := range garbageItems {
			travelMinutesMap[garbageItem] = temptravelMinutes
		}
	}

	minutes = minutes + garbageMinutes

	for _, travelMinutes := range travelMinutesMap {
		minutes = minutes + travelMinutes
	}

	return minutes
}
