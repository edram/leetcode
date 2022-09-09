package leetcode

import (
	"fmt"
	"path/filepath"
	"testing"

	"github.com/edram/leetcode/util"
)

type ConstructArrayCase struct {
	Input struct {
		N int
		K int
	}
}

func TestAddTwoNumbers(t *testing.T) {
	var casePath, _ = filepath.Abs("./cases.json")
	payload, err := util.LoadCases[[]ConstructArrayCase](casePath)
	if err != nil {
		panic(err)
	}

	for i, testCase := range *payload {
		fmt.Printf("正在执行第 %d 个测试用例\n", i+1)
		var (
			n          = testCase.Input.N
			k          = testCase.Input.K
			testResult = make(map[int]int)
			testK      = make(map[int]int)
			diff       int
		)

		result := constructArray(n, k)

		fmt.Printf("n: %v ,k: %v ==> %v \n", n, k, result)

		for index, num := range result {
			if num < 1 || num > n {
				continue
			}
			if _, ok := testResult[num]; ok {
				continue
			}
			testResult[num] = 1

			if index < 1 {
				continue
			}
			var pre = result[index-1]
			if num > pre {
				diff = num - pre
			} else {
				diff = pre - num
			}

			testK[diff] = 1
		}

		if len(testResult) != n {
			t.Errorf("元素个数不等于 %d", n)
		}

		if len(testK) != k {
			t.Errorf("相邻值相差的绝对值个数不等于 %d", k)
		}
	}
}
