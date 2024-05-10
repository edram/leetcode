import cases from "./cases.json";
import countTestedDevices from "./countTestedDevices";

test("count tested devices after test operations", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = countTestedDevices(
      testCase.input
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
