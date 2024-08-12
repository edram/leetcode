import cases from "./cases.json";
import MagicDictionary from "./MagicDictionary";

test("implement magic dictionary", () => {
  cases.forEach((testCase, index) => {
    console.log(`正在执行第 ${index + 1} 个测试用例\n`);
    console.time("time");
    const dictionary = new MagicDictionary();
    dictionary.buildDict(testCase.dictionary);
    for (const item of testCase.cases) {
      expect(item.output).toEqual(dictionary.search(item.input));
    }
    console.timeEnd("time");
  });
});
