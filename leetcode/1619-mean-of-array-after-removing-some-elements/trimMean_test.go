package leetcode

import (
	"fmt"
	"math"
	"path/filepath"
	"testing"

	"github.com/edram/leetcode/util"
)

type TrimMeanCase struct {
	Input []int

	Output float64
}

func TestTrimMean(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]TrimMeanCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("nums: %v ==> %v \n", testCase.Input, testCase.Output)

		result := trimMean(testCase.Input)
		var diff = math.Abs(result - testCase.Output)
		if diff > 1e-5 {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
