package leetcode

type ListNode struct {
	Val  int
	Next *ListNode
}

func arrayToListNode(array []int) *ListNode {
	var listNode = ListNode{}

	var cursor = &listNode
	for _, num := range array {
		cursor.Next = &ListNode{Val: num}
		cursor = cursor.Next
	}

	return listNode.Next
}
