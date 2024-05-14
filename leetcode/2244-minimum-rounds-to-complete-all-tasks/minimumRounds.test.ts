import cases from "./cases.json";
import minimumRounds from "./minimumRounds";

test("minimum rounds to complete all tasks", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = minimumRounds(testCase.input);
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
