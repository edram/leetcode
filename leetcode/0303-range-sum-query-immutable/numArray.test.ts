import cases from "./cases.json";
import NumArray from "./numArray";

test("missing number", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const numArray = new NumArray(testCase.input.NumArray);

    expect(numArray.sumRange(testCase.input.left, testCase.input.right)).toBe(
      testCase.output
    );
  });
});
