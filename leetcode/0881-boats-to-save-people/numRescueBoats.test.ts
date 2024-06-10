import cases from "./cases.json";
import numRescueBoats from "./numRescueBoats";

test("boats to save people", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    console.time("time");
    const result = numRescueBoats(testCase.input.people, testCase.input.limit);
    console.timeEnd("time");
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
