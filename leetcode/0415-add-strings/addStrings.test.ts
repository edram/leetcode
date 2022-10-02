import cases from "./cases.json";
import addStrings from "./addStrings";

test("add strings", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = addStrings(testCase.input.num1, testCase.input.num2);
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toBe(testCase.output);
  });
});
