package leetcode

import (
	"fmt"
	"path/filepath"
	"reflect"
	"strings"
	"testing"

	"github.com/edram/leetcode/util"
)

type ReverseStringCase struct {
	Input []string

	Output []string
}

func TestReverseString(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]ReverseStringCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		fmt.Printf("string: %v ==> %v \n", testCase.Input, testCase.Output)

		var input = []byte(strings.Join(testCase.Input, ""))
		var output = []byte(strings.Join(testCase.Output, ""))

		reverseString(input)
		if !reflect.DeepEqual(input, output) {
			t.Errorf("期望 %v, 结果 %v", output, input)
		}
	}
}
