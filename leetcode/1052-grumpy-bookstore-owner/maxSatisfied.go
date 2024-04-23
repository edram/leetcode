package leetcode

func maxSatisfied(customers []int, grumpy []int, minutes int) int {
	var result = 0

	for index, customer := range customers {
		if grumpy[index] == 0 {
			result += customer
		}
	}

	var (
		increase    = 0
		maxIncrease = 0
	)

	for i := 0; i < minutes; i++ {
		increase = increase + customers[i]*grumpy[i]
	}

	maxIncrease = increase

	for i := minutes; i < len(customers); i++ {
		increase =
			increase -
				customers[i-minutes]*grumpy[i-minutes] +
				customers[i]*grumpy[i]

		maxIncrease = max(maxIncrease, increase)
	}

	return result + maxIncrease
}
