use crate::Solution;

impl Solution {
    pub fn max_satisfied(customers: Vec<i32>, grumpy: Vec<i32>, minutes: i32) -> i32 {
        let mut result = 0;

        for (index, customer) in customers.iter().enumerate() {
            if grumpy[index] == 0 {
                result = result + customer;
            }
        }

        let mut increase = 0;
        let mut max_increase = 0;

        for i in 0..minutes as usize {
            increase = increase + customers[i] * grumpy[i]
        }
        max_increase = increase;

        for i in minutes..customers.len() as i32 {
            increase = increase
                - customers[(i - minutes) as usize] * grumpy[(i - minutes) as usize]
                + customers[i as usize] * grumpy[i as usize];

            max_increase = max_increase.max(increase);
        }

        return result + max_increase;
    }
}
