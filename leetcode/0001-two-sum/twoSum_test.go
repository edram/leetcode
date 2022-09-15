package leetcode

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"reflect"
	"testing"

	"github.com/edram/leetcode/util"
)

type TwoSumCast struct {
	Input struct {
		Nums   []int
		Target int
	}

	Output []int
}

func TestTwoSum(t *testing.T) {
	content, _ := os.ReadFile("./cases.json")

	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]TwoSumCast](casePath)
	if err != nil {
		panic(err)
	}
	_ = json.Unmarshal(content, &payload)

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("nums: %v , target: %v ==> %v \n", testCase.Input.Nums, testCase.Input.Target, testCase.Output)

		result := twoSum(testCase.Input.Nums, testCase.Input.Target)
		if !reflect.DeepEqual(result, testCase.Output) {
			t.Errorf("期望 %v, 结果 %v", testCase.Output, result)
		}
	}
}
