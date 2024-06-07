use crate::Solution;

impl Solution {
    pub fn max_operations(nums: Vec<i32>) -> i32 {
        let mut times = 1;
        let sum = nums[0] + nums[1];

        for index in (2..(nums.len() - 1)).step_by(2) {
            if nums[index] + nums[index + 1] != sum {
                break;
            }

            times += 1
        }

        return times;
    }
}
