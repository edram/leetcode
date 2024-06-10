package leetcode

import "sort"

func numRescueBoats(people []int, limit int) int {
	var boats = 0

	sort.Ints(people)

	for lightIndex, heavyIndex := 0, len(people)-1; lightIndex <= heavyIndex; heavyIndex-- {
		var light = people[lightIndex]
		var heavy = people[heavyIndex]

		if light+heavy <= limit {
			lightIndex++
		}

		boats++
	}

	return boats
}
