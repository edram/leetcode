use crate::Solution;

use std::collections::HashMap;

impl Solution {
    pub fn minimum_rounds(tasks: Vec<i32>) -> i32 {
        let mut rounds = 0;
        let mut task_count_map: HashMap<i32, i32> = HashMap::new();

        for task in tasks {
            *task_count_map.entry(task).or_insert(0) += 1;
        }

        for (_, count) in task_count_map {
            if count == 1 {
                rounds = -1;
                break;
            }

            rounds = rounds + ((count as f64) / 3.0).ceil() as i32;
        }

        return rounds;
    }
}
