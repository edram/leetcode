import cases from "./cases.json";
import trimMean from "./trimMean";

test("mean of array after removing some elements", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const diff = Math.abs(trimMean(testCase.input) - testCase.output);
    expect(diff <= 1e-5).toBeTruthy();
  });
});
