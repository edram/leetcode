import cases from "./cases.json";
import uniqueLetterString from "./uniqueLetterString";

test("count unique characters of all substrings of a given string", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    expect(uniqueLetterString(testCase.input)).toEqual(testCase.output);
  });
});
