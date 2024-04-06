use crate::Solution;

use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut value: Vec<i32> = Vec::new();
        let mut value_index_map: HashMap<i32, i32> = HashMap::new();

        for (index, num) in nums.iter().enumerate() {
            let match_num = &(target - num);
            if let Some(match_num_index) = value_index_map.get(match_num) {
                value = vec![*match_num_index, index as i32];
                break;
            }

            value_index_map.insert(*num, index as i32);
        }

        return value;
    }
}
