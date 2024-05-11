import cases from "./cases.json";
import garbageCollection from "./garbageCollection";

test("minimum amount of time to collect garbage", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = garbageCollection(
      testCase.input.garbage,
      testCase.input.travel
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
