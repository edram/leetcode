use crate::Solution;

impl Solution {
    pub fn minimum_refill(plants: Vec<i32>, capacity_a: i32, capacity_b: i32) -> i32 {
        let mut refill = 0;
        let mut index_a: usize = 0;
        let mut index_b = plants.len() - 1;
        let mut rest_a = capacity_a;
        let mut rest_b = capacity_b;

        while index_a < index_b {
            let plant_a = plants[index_a];
            let plant_b = plants[index_b];
            if rest_a >= plant_a {
                rest_a = rest_a - plant_a;
            } else {
                refill = refill + 1;
                rest_a = capacity_a - plant_a;
            }

            if rest_b >= plant_b {
                rest_b = rest_b - plant_b
            } else {
                refill = refill + 1;
                rest_b = capacity_b - plant_b;
            }

            index_a = index_a + 1;
            index_b = index_b - 1;
        }

        if index_a == index_b {
          let rest = rest_a.max(rest_b);

          if rest < plants[index_a] {
              refill = refill + 1;
          }
        }

        return refill;
    }
}
