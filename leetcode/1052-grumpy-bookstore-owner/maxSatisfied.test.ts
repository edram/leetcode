import cases from "./cases.json";
import maxSatisfied from "./maxSatisfied";

test("grumpy bookstore owner", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = maxSatisfied(
      testCase.input.customers,
      testCase.input.grumpy,
      testCase.input.minutes
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );
    expect(result).toEqual(testCase.output);
  });
});
