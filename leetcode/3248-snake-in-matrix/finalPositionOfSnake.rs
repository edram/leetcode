use crate::Solution;

use std::collections::HashMap;

impl Solution {
    pub fn final_position_of_snake(n: i32, commands: Vec<String>) -> i32 {
        let mut position = 0;
        let map = HashMap::from([("LEFT", -1), ("RIGHT", 1), ("UP", -n), ("DOWN", n)]);

        for command in commands {
            if let Some(offset) = map.get(command.as_str()) {
                position = offset + position
            }
        }

        return position;
    }
}
