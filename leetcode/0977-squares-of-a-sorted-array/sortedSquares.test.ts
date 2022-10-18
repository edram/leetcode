import cases from "./cases.json";
import sortedSquares from "./sortedSquares";

test("squares of a sorted array", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = sortedSquares(testCase.input);
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );
    expect(result).toEqual(testCase.output);
  });
});
