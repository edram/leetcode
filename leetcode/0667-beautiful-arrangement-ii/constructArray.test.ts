import cases from "./cases.json";
import constructArray from "./constructArray";

test("beautiful arrangement ii", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);

    const n = testCase.input.n;
    const k = testCase.input.k;
    const result = constructArray(n, k);
    const testResult = [];

    expect(result.length).toBe(n);
    const kMap = new Map<number, boolean>();
    let testK = 0;
    for (const [index, num] of result.entries()) {
      if (num < 1 || num > n) {
        continue;
      }
      testResult.push(num);
      // 计算差值
      if (index < 1) {
        continue;
      }
      const diff = Math.abs(num - result[index - 1]!);
      if (kMap.has(diff)) {
        continue;
      }

      kMap.set(diff, true);
      testK++;
    }
    expect(testResult).toStrictEqual(result);
    expect(testK).toBe(k);
  });
});
