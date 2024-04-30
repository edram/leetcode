import cases from "./cases.json";
import numberOfEmployeesWhoMetTarget from "./numberOfEmployeesWhoMetTarget";

test("number of employees who met the target", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = numberOfEmployeesWhoMetTarget(
      testCase.input.hours,
      testCase.input.target,
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
