package leetcode

import (
	"fmt"
	"path/filepath"
	"testing"

	"github.com/edram/leetcode/util"
)

type TheMaximumAchievableXCase struct {
	Input struct {
		Num int
		T   int
	}

	Output int
}

func TestTheMaximumAchievableX(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]TheMaximumAchievableXCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("string: %v ==> %v \n", testCase.Input, testCase.Output)

		result := theMaximumAchievableX(testCase.Input.Num, testCase.Input.T)
		if result != testCase.Output {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
