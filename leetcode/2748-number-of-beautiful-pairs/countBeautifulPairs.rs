use crate::Solution;

impl Solution {
    pub fn count_beautiful_pairs(nums: Vec<i32>) -> i32 {
        let mut count = 0;
        let length = nums.len();

        for i in 0..length {
            let mut first = nums[i];
            while first >= 10 {
                first = first / 10
            }

            for j in i + 1..length {
                let end = nums[j] % 10;

                if Self::gcd(first, end) == 1 {
                    count = count + 1
                }
            }
        }

        return count;
    }

    fn gcd(mut a: i32, mut b: i32) -> i32 {
        while b != 0 {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
