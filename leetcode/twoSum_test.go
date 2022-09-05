package leetcode

import (
	"encoding/json"
	"fmt"
	"os"
	"reflect"
	"testing"
)

type TwoSumCast struct {
	Input struct {
		Nums   []int
		Target int
	}

	Output []int
}

func TestHelloName(t *testing.T) {
	content, _ := os.ReadFile("./cases.json")

	var payload []TwoSumCast
	_ = json.Unmarshal(content, &payload)

	for i, testCase := range payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("nums: %v , target: %v ==> %v \n", testCase.Input.Nums, testCase.Input.Target, testCase.Output)

		result := twoSum()
		if !reflect.DeepEqual(result, testCase.Output) {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
