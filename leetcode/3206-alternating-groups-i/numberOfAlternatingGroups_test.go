package leetcode

import (
	"fmt"
	"path/filepath"
	"testing"

	"github.com/edram/leetcode/util"
)

type NumberOfAlternatingGroupsCase struct {
	Input []int

	Output int
}

func TestNumberOfAlternatingGroups(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]NumberOfAlternatingGroupsCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("string: %v ==> %v \n", testCase.Input, testCase.Output)

		result := numberOfAlternatingGroups(testCase.Input)
		if result != testCase.Output {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
