import cases from "./cases.json";
import wateringPlants from "./wateringPlants";

test("watering plants", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = wateringPlants(
      testCase.input.plants,
      testCase.input.capacity
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toBe(testCase.output);
  });
});
