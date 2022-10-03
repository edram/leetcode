import cases from "./cases.json";
import isIsomorphic from "./isIsomorphic";

test("isomorphic strings", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = isIsomorphic(testCase.input.s, testCase.input.t);
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toBe(testCase.output);
  });
});
