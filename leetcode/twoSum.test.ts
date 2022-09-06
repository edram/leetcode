import cases from "./cases.json";
import twoSum from "./twoSum";

test("two sum", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    expect(twoSum(testCase.input.nums, testCase.input.target)).toStrictEqual(
      testCase.output
    );
  });
});
