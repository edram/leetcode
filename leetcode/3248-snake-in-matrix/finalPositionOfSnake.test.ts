import cases from "./cases.json";
import finalPositionOfSnake from "./finalPositionOfSnake";

test("snake in matrix", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    console.time("time");
    const result = finalPositionOfSnake(
      testCase.input.n,
      testCase.input.commands
    );
    console.timeEnd("time");
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
