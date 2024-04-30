use crate::Solution;

impl Solution {
    pub fn number_of_employees_who_met_target(hours: Vec<i32>, target: i32) -> i32 {
        let mut number = 0;

        for hour in hours {
            if hour < target {
                continue;
            }

            number += 1;
        }

        return number;
    }
}
