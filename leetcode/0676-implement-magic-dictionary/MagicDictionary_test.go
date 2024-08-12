package leetcode

import (
	"fmt"
	"path/filepath"
	"testing"

	"github.com/edram/leetcode/util"
)

type MagicDictionaryCase struct {
	Dictionary []string
	Cases      []struct {
		Input  string
		Output bool
	}
}

func TestMagicDictionary(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]MagicDictionaryCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)

		dictionary := Constructor()
		dictionary.BuildDict(testCase.Dictionary)

		for _, check := range testCase.Cases {
			result := dictionary.Search(check.Input)
			if check.Output != result {
				t.Errorf("期望 %v, 结果 %v", check.Output, result)
			}
		}

	}
}
