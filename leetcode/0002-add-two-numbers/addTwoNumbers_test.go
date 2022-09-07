package leetcode

import (
	"fmt"
	"path/filepath"
	"reflect"
	"testing"

	"github.com/edram/leetcode/util"
)

type AddTwoNumbersCase struct {
	Input struct {
		L1 []int
		L2 []int
	}

	Output []int
}

func TestAddTwoNumbers(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]AddTwoNumbersCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("nums: %v ==> %v \n", testCase.Input, testCase.Output)

		result := addTwoNumbers(arrayToListNode(testCase.Input.L1), arrayToListNode(testCase.Input.L2))
		if !reflect.DeepEqual(*result, *arrayToListNode(testCase.Output)) {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
