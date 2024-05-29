use crate::Solution;

use std::collections::HashMap;

impl Solution {
    pub fn maximum_length(s: String) -> i32 {
        let mut length = -1;
        let mut letter_lengths_map: HashMap<char, Vec<i32>> = HashMap::new();

        let mut last_letter: char = char::default();
        let mut temp_length = 1;
        for letter in s.chars() {
            if last_letter == letter {
                temp_length += 1;
            } else {
                temp_length = 1;
            }

            let letter_lengths = letter_lengths_map.entry(letter).or_default();
            letter_lengths.push(temp_length);
            letter_lengths.sort_by(|a, b| b.cmp(a));
            if letter_lengths.len() > 3 {
                letter_lengths.pop();
            }

            last_letter = letter;
        }

        for letter_lenghts in letter_lengths_map.values() {
            if letter_lenghts.len() >= 3 {
                length = length.max(letter_lenghts[2]);
            }
        }

        return length;
    }
}
