import cases from "./cases.json";
import minimumRefill from "./minimumRefill";

test("watering plants ii", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = minimumRefill(
      testCase.input.plants,
      testCase.input.capacityA,
      testCase.input.capacityB
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toBe(testCase.output);
  });
});
