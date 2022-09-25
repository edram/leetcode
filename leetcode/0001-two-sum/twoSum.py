from typing import Dict, List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        valueIndexMap: Dict[int,int] = dict()
        result:List[int] = []

        for index, num in enumerate(nums):
            matchNum = target - num
            if matchNum in valueIndexMap:
                result = [valueIndexMap[matchNum], index]
                break

            valueIndexMap[num] = index

        return result
