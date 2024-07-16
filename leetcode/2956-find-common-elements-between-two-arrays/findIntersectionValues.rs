use crate::Solution;

impl Solution {
    pub fn find_intersection_values(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut result: Vec<i32> = Vec::from([0, 0]);

        for num1 in &nums1 {
            for num2 in &nums2 {
                if num1 == num2 {
                    result[0] = result[0] + 1;
                    break;
                }
            }
        }

        for num2 in &nums2 {
            for num1 in &nums1 {
                if num1 == num2 {
                    result[1] = result[1] + 1;
                    break;
                }
            }
        }

        return result;
    }
}
