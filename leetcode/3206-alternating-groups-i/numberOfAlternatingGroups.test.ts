import cases from "./cases.json";
import numberOfAlternatingGroups from "./numberOfAlternatingGroups";

test("alternating groups i", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    console.time("time");
    const result = numberOfAlternatingGroups(testCase.input);
    console.timeEnd("time");
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
