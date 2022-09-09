import cases from "./cases.json";
import minOperations from "./minOperations";

test("crawler log folder", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    expect(minOperations(testCase.input)).toEqual(testCase.output);
  });
});
