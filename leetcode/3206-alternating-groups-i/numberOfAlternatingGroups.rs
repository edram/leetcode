use crate::Solution;

impl Solution {
    pub fn number_of_alternating_groups(colors: Vec<i32>) -> i32 {
        let mut result = 0;
        let length = colors.len();

        for index in 0..length {
            let start = (index + length - 1) % length;
            let end = (index + 1) % length;
            let color = colors[index];

            if color != colors[start] && color != colors[end] {
                result = result + 1;
            }
        }

        return result;
    }
}
