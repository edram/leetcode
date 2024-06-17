import cases from "./cases.json";
import findLUSlength from "./findLUSlength";

test("longest uncommon subsequence i", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    console.time("time");
    const result = findLUSlength(testCase.input.a, testCase.input.b);
    console.timeEnd("time");
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
