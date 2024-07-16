import cases from "./cases.json";
import findIntersectionValues from "./findIntersectionValues";

test("find common elements between two arrays", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    console.time("time");
    const result = findIntersectionValues(
      testCase.input.nums1,
      testCase.input.nums2
    );
    console.timeEnd("time");
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toEqual(testCase.output);
  });
});
