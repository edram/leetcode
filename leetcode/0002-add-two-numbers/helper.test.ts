import { arrayToListNode, ListNode } from "./helper";

test("array to ListNode", () => {
  const arr = [1, 2, 3, 0, 4];

  const listNode = arrayToListNode(arr);

  expect(listNode).not.toBeNull();
  let target = listNode!;
  expect(target.val).toBe(1);
  target = target!.next!;
  expect(target.val).toBe(2);
  target = target.next!;
  expect(target.val).toBe(3);
  target = target.next!;
  expect(target.val).toBe(0);
  target = target.next!;
  expect(target.val).toBe(4);

  const arr2 = [1];
  const testNode = new ListNode(1);
  expect(arrayToListNode(arr2)).toStrictEqual(testNode);
});
