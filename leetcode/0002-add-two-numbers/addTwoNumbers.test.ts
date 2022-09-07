import cases from "./cases.json";
import addTwoNumbers from "./addTwoNumbers";
import { arrayToListNode } from "./helper";

test("add two numbers", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);

    expect(
      addTwoNumbers(
        arrayToListNode(testCase.input.l1),
        arrayToListNode(testCase.input.l2)
      )
    ).toStrictEqual(arrayToListNode(testCase.output));
  });
});
