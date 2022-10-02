package leetcode

import (
	"fmt"
	"strconv"
)

func addStrings(num1 string, num2 string) string {
	var result = ""
	var num1CurrentIndex = len(num1) - 1
	var num2CurrentIndex = len(num2) - 1
	var carry = 0

	for num1CurrentIndex >= 0 || num2CurrentIndex >= 0 {
		var num1Item, num2Item int

		if num1CurrentIndex >= 0 {
			num1Item, _ = strconv.Atoi(string(num1[num1CurrentIndex]))
		}

		if num2CurrentIndex >= 0 {
			num2Item, _ = strconv.Atoi(string(num2[num2CurrentIndex]))
		}

		var sum = num1Item + num2Item + carry
		carry = sum / 10
		result = fmt.Sprintf("%d%s", sum%10, result)

		if num1CurrentIndex >= 0 {
			num1CurrentIndex--
		}

		if num2CurrentIndex >= 0 {
			num2CurrentIndex--
		}
	}

	if carry > 0 {
		result = fmt.Sprintf("%d%s", carry, result)
	}

	return result
}
