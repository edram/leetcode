import cases from "./cases.json";
import distributeCandies from "./distributeCandies";

test("distribute candies to people", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    console.time("time");
    const result = distributeCandies(
      testCase.input.candies,
      testCase.input.num_people
    );
    console.timeEnd("time");
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
