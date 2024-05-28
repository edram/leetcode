use crate::Solution;

impl Solution {
    pub fn find_peaks(mountain: Vec<i32>) -> Vec<i32> {
        let mut peaks: Vec<i32> = Vec::new();

        for index in 1..mountain.len() {
            let item = mountain[index];

            if item > mountain[index - 1] && item > mountain[index + 1] {
                peaks.push(index as i32)
            }
        }

        return peaks;
    }
}
