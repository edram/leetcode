package leetcode

import (
	"fmt"
	"path/filepath"
	"reflect"
	"testing"

	"github.com/edram/leetcode/util"
)

type MaxSatisfiedCase struct {
	Input struct {
		Customers []int
		Grumpy    []int
		Minutes   int
	}

	Output int
}

func TestMaxSatisfied(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]MaxSatisfiedCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("input: %v ==> %v \n", testCase.Input, testCase.Output)

		result := maxSatisfied(testCase.Input.Customers, testCase.Input.Grumpy, testCase.Input.Minutes)
		if !reflect.DeepEqual(result, testCase.Output) {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
