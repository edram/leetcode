use crate::Solution;

impl Solution {
    pub fn minimum_steps(s: String) -> i64 {
        let mut steps: i64 = 0;
        let mut black_count: i64 = 0;

        for color in s.chars() {
            if color == '1' {
                black_count += 1;
            } else {
                steps = steps + black_count
            }
        }

        return steps;
    }
}
