import cases from "./cases.json";
import twoOutOfThree from "./twoOutOfThree";

test("two out of three", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = twoOutOfThree(
      testCase.input.nums1,
      testCase.input.nums2,
      testCase.input.nums3
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result.sort((a, b) => a - b)).toEqual(testCase.output.sort((a, b) => a - b));
  });
});
