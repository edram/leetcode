import cases from "./cases.json";
import reverseString from "./reverseString";

test("reverse string", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = reverseString(testCase.input);
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(testCase.input).toEqual(testCase.output);
  });
});
