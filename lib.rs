pub struct Solution {}

pub mod util;

pub mod leetcode {
    #[path = "0000-add/add.rs"]
    pub mod add;
    #[path = "0001-two-sum/twoSum.rs"]
    pub mod two_sum;

    #[path = "1052-grumpy-bookstore-owner/maxSatisfied.rs"]
    pub mod max_satisfied;

    #[cfg(test)]
    #[path = ""]
    mod rust {
        #[path = "0000-add/add_test.rs"]
        mod add_test;
        #[path = "0001-two-sum/twoSum_test.rs"]
        mod tow_sum_test;
        #[path = "1052-grumpy-bookstore-owner/maxSatisfied_test.rs"]
        mod max_satisfied_test;
    }
}
