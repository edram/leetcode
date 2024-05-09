use crate::Solution;

impl Solution {
    pub fn watering_plants(plants: Vec<i32>, capacity: i32) -> i32 {
        let mut steps = 0;
        let mut rest = capacity;

        for (index, &plant) in plants.iter().enumerate() {
            if rest >= plant {
                rest = rest - plant;

                steps = steps + 1;
            } else {
                rest = capacity - plant;
                steps = steps + 2 * (index as i32) + 1
            }
        }

        return steps;
    }
}
