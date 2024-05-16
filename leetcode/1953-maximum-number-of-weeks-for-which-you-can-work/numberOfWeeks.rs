use crate::Solution;

impl Solution {
    pub fn number_of_weeks(milestones: Vec<i32>) -> i64 {
        let mut rest_weeks: i64 = 0;
        let mut longest_weeks: i64 = 0;

        for milestone in milestones {
            longest_weeks = longest_weeks.max(milestone as i64);
            rest_weeks = rest_weeks + milestone as i64;
        }

        rest_weeks = rest_weeks - longest_weeks;

        if longest_weeks > rest_weeks + 1 {
            longest_weeks = rest_weeks + 1;
        }

        return longest_weeks + rest_weeks;
    }
}
