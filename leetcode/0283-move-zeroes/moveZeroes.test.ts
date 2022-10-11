import cases from "./cases.json";
import missingNumber from "./moveZeroes";

test("move zeroes", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = missingNumber(testCase.input);
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(testCase.input).toEqual(testCase.output);
  });
});
