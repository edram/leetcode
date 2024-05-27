use crate::Solution;

impl Solution {
    pub fn missing_rolls(rolls: Vec<i32>, mean: i32, n: i32) -> Vec<i32> {
        let mut result = Vec::new();
        let missing_sum: i32 = mean * (rolls.len() as i32 + n) - rolls.iter().sum::<i32>();

        if missing_sum >= n && missing_sum <= 6 * n {
            let avg = missing_sum / n;
            let rest = missing_sum % n;

            for i in 1..n + 1 {
                if i <= rest {
                    result.push(avg + 1)
                } else {
                    result.push(avg)
                }
            }

            return result;
        }

        return result;
    }
}
