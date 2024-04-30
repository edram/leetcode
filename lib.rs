pub struct Solution {}

pub mod util;

pub mod leetcode {
    #[path = "0000-add/add.rs"]
    pub mod add;
    #[path = "0001-two-sum/twoSum.rs"]
    pub mod two_sum;

    #[path = "1052-grumpy-bookstore-owner/maxSatisfied.rs"]
    pub mod max_satisfied;

    #[path = "2798-number-of-employees-who-met-the-target/numberOfEmployeesWhoMetTarget.rs"]
    pub mod number_of_employees_who_met_target;

    #[cfg(test)]
    #[path = ""]
    mod rust {
        #[path = "0000-add/add_test.rs"]
        mod add_test;
        #[path = "0001-two-sum/twoSum_test.rs"]
        mod test_tow_sum;
        #[path = "1052-grumpy-bookstore-owner/maxSatisfied_test.rs"]
        mod test_max_satisfied;

        #[path = "2798-number-of-employees-who-met-the-target/numberOfEmployeesWhoMetTarget_test.rs"]
        mod test_number_of_employees_who_met_the_target;
    }
}
