import cases from "./cases.json";
import mostCommonWord from "./mostCommonWord";

test("most common word", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = mostCommonWord(
      testCase.input.paragraph,
      testCase.input.banned
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toBe(testCase.output);
  });
});
