package leetcode

func romanToInt(s string) int {
	var romanIntMap = map[string]int{
		"I":  1,
		"V":  5,
		"X":  10,
		"L":  50,
		"C":  100,
		"D":  500,
		"M":  1000,
		"IV": 4,
		"IX": 9,
		"XL": 40,
		"XC": 90,
		"CD": 400,
		"CM": 900,
	}

	var int = 0
	for index := 0; index < len(s); index++ {
		var roman = string(s[index])
		var combinRoman string
		if index+1 == len(s) {
			combinRoman = roman
		} else {
			combinRoman = roman + string(s[index+1])
		}

		if value, ok := romanIntMap[combinRoman]; ok {
			int = int + value
			index++
			continue
		}

		int = int + romanIntMap[roman]

	}

	return int
}
