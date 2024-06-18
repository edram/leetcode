import cases from "./cases.json";
import discountPrices from "./discountPrices";

test("apply-discount-to-prices", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    console.time("time");
    const result = discountPrices(
      testCase.input.sentence,
      testCase.input.discount
    );
    console.timeEnd("time");
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
