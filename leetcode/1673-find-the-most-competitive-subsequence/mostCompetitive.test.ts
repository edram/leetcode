import cases from "./cases.json";
import mostCompetitive from "./mostCompetitive";

test("find the most competitive subsequence", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = mostCompetitive(testCase.input.nums, testCase.input.k);
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
