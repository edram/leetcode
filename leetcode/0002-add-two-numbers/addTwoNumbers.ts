import { ListNode } from "./helper";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode();

  let cursor = result;
  let cursorl1 = l1;
  let cursorl2 = l2;

  let carry = 0;
  while (cursorl1 != null || cursorl2 != null) {
    const sum = (cursorl1?.val ?? 0) + (cursorl2?.val ?? 0) + carry;

    cursor.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    console.log(sum % 10);

    // next
    cursor = cursor.next;
    cursorl1 = cursorl1?.next ?? null;
    cursorl2 = cursorl2?.next ?? null;
  }
  // 最后进位
  if (carry > 0) {
    cursor.next = new ListNode(carry);
  }

  return result.next;
}

export default addTwoNumbers;
