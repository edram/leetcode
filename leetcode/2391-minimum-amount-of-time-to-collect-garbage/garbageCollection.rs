use crate::Solution;

use std::collections::HashMap;

impl Solution {
    pub fn garbage_collection(garbage: Vec<String>, travel: Vec<i32>) -> i32 {
        let mut minutes = 0;
        let mut garbage_minutes = 0;
        let mut travel_minutes_map: HashMap<char, i32> = HashMap::new();
        let mut temptravel_minutes = 0;

        for (index, garbage_items) in garbage.iter().enumerate() {
            garbage_minutes = garbage_minutes + garbage_items.len() as i32;

            if index > 0 {
                temptravel_minutes = temptravel_minutes + travel[index - 1];
            }

            for garbage_item in garbage_items.chars() {
                travel_minutes_map.insert(garbage_item, temptravel_minutes);
            }
        }

        minutes = minutes + garbage_minutes;

        for travel_minutes in travel_minutes_map.values() {
            minutes = minutes + travel_minutes;
        }

        return minutes;
    }
}
