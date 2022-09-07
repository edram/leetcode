package leetcode

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var result = ListNode{}

	var cursor = &result
	var carry = 0
	for l1 != nil || l2 != nil {
		var num1 = 0
		var num2 = 0
		if l1 != nil {
			num1 = l1.Val
		}
		if l2 != nil {
			num2 = l2.Val
		}

		var sum = num1 + num2 + carry
		cursor.Next = &ListNode{Val: sum % 10}
		carry = sum / 10

		//next
		cursor = cursor.Next
		if l1 != nil {
			l1 = l1.Next
		}
		if l2 != nil {
			l2 = l2.Next
		}
	}

	if carry > 0 {
		cursor.Next = &ListNode{Val: carry}
	}

	return result.Next
}
