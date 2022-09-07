package leetcode

import (
	"reflect"
	"testing"
)

func TestArrayToListNode(t *testing.T) {
	var arr = []int{1, 2, 3, 0, 4}

	var listNode = arrayToListNode(arr)

	if listNode == nil {
		panic("不应该为空")
	}

	var target = listNode

	if target.Val != 1 {
		t.Error("应该为1")
	}

	target = target.Next
	if target.Val != 2 {
		t.Error("应该为2")
	}

	target = target.Next
	if target.Val != 3 {
		t.Error("应该为3")
	}

	target = target.Next
	if target.Val != 0 {
		t.Error("应该为0")
	}

	target = target.Next
	if target.Val != 4 {
		t.Error("应该为4")
	}

	var testNode = ListNode{Val: 1}

	if !reflect.DeepEqual(testNode, *arrayToListNode([]int{1})) {
		t.Errorf("两个对象应该相等")
	}
}
