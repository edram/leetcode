import cases from "./cases.json";
import maxLengthBetweenEqualCharacters from "./maxLengthBetweenEqualCharacters";

test("largest substring between two equal characters", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = maxLengthBetweenEqualCharacters(testCase.input);
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toBe(testCase.output);
  });
});
