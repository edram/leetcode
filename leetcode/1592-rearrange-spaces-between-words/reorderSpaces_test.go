package leetcode

import (
	"fmt"
	"path/filepath"
	"testing"

	"github.com/edram/leetcode/util"
)

type ReorderSpacesCase struct {
	Input string

	Output string
}

func TestReorderSpaces(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]ReorderSpacesCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("nums: %v ==> %v \n", testCase.Input, testCase.Output)

		result := reorderSpaces(testCase.Input)
		if result != testCase.Output {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
