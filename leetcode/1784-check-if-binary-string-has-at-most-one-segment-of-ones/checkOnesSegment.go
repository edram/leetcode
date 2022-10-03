package leetcode

func checkOnesSegment(s string) bool {
	var onesCount = 0
	var recordIndex = -2

	for index, numString := range s {
		if numString != '1' {
			continue
		}

		if recordIndex+1 == index {
			recordIndex = index
			continue
		}

		recordIndex = index
		onesCount++
	}

	return onesCount <= 1
}
