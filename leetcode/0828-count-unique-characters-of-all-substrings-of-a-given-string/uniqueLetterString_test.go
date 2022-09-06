package leetcode

import (
	"encoding/json"
	"fmt"
	"os"
	"testing"
)

type UniqueLetterStringCase struct {
	Input string

	Output int
}

func TestUniqueLetterString(t *testing.T) {
	content, _ := os.ReadFile("./cases.json")

	var payload []UniqueLetterStringCase
	_ = json.Unmarshal(content, &payload)

	for i, testCase := range payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("nums: %v ==> %v \n", testCase.Input, testCase.Output)

		result := uniqueLetterString(testCase.Input)
		if result != testCase.Output {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
