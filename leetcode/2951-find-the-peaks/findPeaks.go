package leetcode

func findPeaks(mountain []int) []int {
	var peaks = []int{}

	for index := 1; index < len(mountain)-1; index++ {
		var item = mountain[index]
		if item > mountain[index-1] && item > mountain[index+1] {
			peaks = append(peaks, index)
		}
	}

	return peaks
}
