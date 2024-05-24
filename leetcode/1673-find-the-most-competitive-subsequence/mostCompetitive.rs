use crate::Solution;

impl Solution {
    pub fn most_competitive(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut result: Vec<i32> = Vec::new();
        for (index, num) in nums.iter().enumerate() {
            while result.len() > 0 && result.last().unwrap() > num {
                if (nums.len() - index + 1 + result.len() - 1) as i32 > k {
                    result.pop();
                } else {
                    break;
                }
            }
            if (result.len() as i32) < k {
                result.push(*num)
            }
        }

        return result;
    }
}
