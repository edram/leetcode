import cases from "./cases.json";
import theMaximumAchievableX from "./theMaximumAchievableX";

test("find the maximum achievable number", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = theMaximumAchievableX(
      testCase.input.num,
      testCase.input.t,
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
