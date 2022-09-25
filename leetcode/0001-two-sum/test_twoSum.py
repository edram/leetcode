import json
import os
from typing import List, TypedDict
from twoSum import Solution


class Input(TypedDict):
    nums: List[int]
    target: int


class Case(TypedDict):
    input: Input
    output: List[int]


def test_twoSum():
    dirname = os.path.dirname(__file__)
    filename = os.path.join(dirname, "cases.json")

    with open(filename, encoding="utf-8") as json_file:
        cases: List[Case] = json.load(json_file)
        for index, case in enumerate(cases):
            print(f"正在执行第 {index} 个测试用例\n")
            solution = Solution()
            result = solution.twoSum(case["input"]["nums"], case["input"]["target"])
            assert result == case["output"]
