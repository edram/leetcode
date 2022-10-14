package leetcode

import "strconv"

func fizzBuzz(n int) []string {
	var result = []string{}

	for i := 1; i <= n; i++ {
		var item = ""

		if i%3 == 0 {
			item = "Fizz"
		}

		if i%5 == 0 {
			item = item + "Buzz"
		}

		if item == "" {
			item = strconv.Itoa(i)
		}

		result = append(result, item)
	}

	return result
}
