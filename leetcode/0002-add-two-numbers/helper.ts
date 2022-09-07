class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const arrayToListNode = (array: number[]): ListNode | null => {
  const listNode = new ListNode();

  let cursor = listNode;
  for (const num of array) {
    cursor.next = new ListNode(num);
    cursor = cursor.next;
  }

  return listNode.next;
};

export { ListNode, arrayToListNode };
