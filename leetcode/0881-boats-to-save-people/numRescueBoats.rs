use crate::Solution;

impl Solution {
    pub fn num_rescue_boats(people: Vec<i32>, limit: i32) -> i32 {
        let mut boats = 0;
        let mut light_index: i32 = 0;
        let mut heavy_index: i32 = (people.len() as i32) - 1;
        let mut people = people.clone();
        people.sort_unstable();

        while light_index <= heavy_index {
            let light = people[light_index as usize];
            let heavy = people[heavy_index as usize];

            if light + heavy <= limit {
                light_index = light_index + 1;
            }

            heavy_index = heavy_index - 1;

            boats = boats + 1;
        }

        return boats;
    }
}
