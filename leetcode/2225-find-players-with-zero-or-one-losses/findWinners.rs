use crate::Solution;

use std::collections::HashMap;

impl Solution {
    pub fn find_winners(matches: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut losses_map: HashMap<i32, i32> = HashMap::new();
        let mut result: Vec<Vec<i32>> = vec![Vec::new(), Vec::new()];

        for _match in matches {
            let (winner, loser) = (_match[0], _match[1]);
            losses_map.entry(winner).or_insert(0);
            *losses_map.entry(loser).or_insert(0) += 1;
        }

        for (key, count) in losses_map {
            if count >= 2 {
                continue;
            }

            result[count as usize].push(key);
        }

        result[0].sort_unstable();
        result[1].sort_unstable();
        return result;
    }
}
