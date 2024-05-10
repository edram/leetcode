use crate::Solution;

impl Solution {
    pub fn count_tested_devices(battery_percentages: Vec<i32>) -> i32 {
        let mut count = 0;

        for percentage in battery_percentages {
            if percentage > count {
                count = count + 1
            }
        }

        return count;
    }
}
