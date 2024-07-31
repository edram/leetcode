import cases from "./cases.json";
import minRectanglesToCoverPoints from "./minRectanglesToCoverPoints";

test("minimum rectangles to cover points", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    console.time("time");
    const result = minRectanglesToCoverPoints(testCase.input.points, testCase.input.w);
    console.timeEnd("time");
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
