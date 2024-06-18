package leetcode

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

func discountPrices(sentence string, discount int) string {
	var words = strings.Split(sentence, " ")
	var compRegEx = regexp.MustCompile(`^\$(\d+)$`)

	for index, word := range words {
		match := compRegEx.FindStringSubmatch(word)

		if len(match) > 0 {
			price, _ := strconv.ParseFloat(match[1], 64)

			words[index] = fmt.Sprintf("$%.2f", price*(1-float64(discount)/100))
		}

	}

	return strings.Join(words, " ")
}
