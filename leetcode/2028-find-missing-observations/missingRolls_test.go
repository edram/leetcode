package leetcode

import (
	"fmt"
	"path/filepath"
	"reflect"
	"testing"

	"github.com/edram/leetcode/util"
)

type MissingRollsCase struct {
	Input struct {
		Rolls []int
		Mean  int
		N     int
	}

	Output []int
}

func TestMissingRolls(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]MissingRollsCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("string: %v ==> %v \n", testCase.Input, testCase.Output)

		result := missingRolls(testCase.Input.Rolls, testCase.Input.Mean, testCase.Input.N)
		if !reflect.DeepEqual(result, testCase.Output) {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
