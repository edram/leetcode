use crate::Solution;

use regex::Regex;

impl Solution {
    pub fn discount_prices(sentence: String, discount: i32) -> String {
        let words: Vec<&str> = sentence.split_whitespace().collect();
        let mut change: Vec<String> = Vec::new();

        let re = Regex::new(r"^\$(\d+)$").unwrap();
        for word in words {
            if let Some(caps) = re.captures(word) {
                let number = caps.get(1).map_or("", |m| m.as_str());
                let price: f64 = number.parse().unwrap();

                change.push(format!("${:.2}", price * (1.0 - discount as f64 / 100.0)))
            } else {
                change.push(word.to_string())
            }
        }

        return change.join(" ");
    }
}
