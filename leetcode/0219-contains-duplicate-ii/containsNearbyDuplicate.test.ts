import cases from "./cases.json";
import containsNearbyDuplicate from "./containsNearbyDuplicate";

test("contains duplicate ii", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    const result = containsNearbyDuplicate(
      testCase.input.nums,
      testCase.input.k
    );
    console.log(
      `input: ${testCase.input} , output: ${testCase.output} ==> ${result} \n`
    );

    expect(result).toBe(testCase.output);
  });
});
