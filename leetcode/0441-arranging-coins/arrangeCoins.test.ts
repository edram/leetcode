import arrangeCoins from "./arrangeCoins";
import cases from "./cases.json";

test("arranging coins", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = arrangeCoins(testCase.input);
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toBe(testCase.output);
  });
});
