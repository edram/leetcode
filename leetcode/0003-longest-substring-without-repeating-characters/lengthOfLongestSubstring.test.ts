import cases from "./cases.json";
import lengthOfLongestSubstring from "./lengthOfLongestSubstring";

test("longest substring without repeating characters", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    expect(lengthOfLongestSubstring(testCase.input)).toEqual(testCase.output);
  });
});
