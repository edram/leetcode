package leetcode

func minimumRefill(plants []int, capacityA int, capacityB int) int {
	var refill = 0
	var (
		indexA = 0
		indexB = len(plants) - 1
		restA  = capacityA
		restB  = capacityB
	)

	for indexA < indexB {
		var plantA = plants[indexA]
		var plantB = plants[indexB]

		if restA >= plantA {
			restA = restA - plantA
		} else {
			refill++

			restA = capacityA - plantA
		}

		if restB >= plantB {
			restB = restB - plantB
		} else {
			refill++

			restB = capacityB - plantB
		}

		indexA++
		indexB--
	}

	if indexA == indexB {
		var rest = max(restA, restB)
		if rest < plants[indexA] {
			refill++
		}
	}

	return refill
}
