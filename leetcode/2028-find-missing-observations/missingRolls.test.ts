import cases from "./cases.json";
import missingRolls from "./missingRolls";

test("find missing observations", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = missingRolls(
      testCase.input.rolls,
      testCase.input.mean,
      testCase.input.n
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
