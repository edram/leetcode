import cases from "./cases.json";
import reorderSpaces from "./reorderSpaces";

test("rearrange spaces between words", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    expect(reorderSpaces(testCase.input)).toEqual(testCase.output);
  });
});
