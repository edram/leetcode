pub struct Solution {}

pub mod util;

pub mod leetcode {
    #[path = "0001-two-sum/twoSum.rs"]
    pub mod two_sum;

    #[path = "1052-grumpy-bookstore-owner/maxSatisfied.rs"]
    pub mod max_satisfied;

    #[path = "2798-number-of-employees-who-met-the-target/numberOfEmployeesWhoMetTarget.rs"]
    pub mod number_of_employees_who_met_target;

    #[path = "2097-watering-plants/wateringPlants.rs"]
    pub mod watering_plants;

    #[path = "2105-watering-plants-ii/minimumRefill.rs"]
    pub mod minimum_refill;

    #[path = "2960-count-tested-devices-after-test-operations/countTestedDevices.rs"]
    pub mod count_tested_devices;

    #[path = "2391-minimum-amount-of-time-to-collect-garbage/garbageCollection.rs"]
    pub mod garbage_collection;

    #[cfg(test)]
    #[path = ""]
    mod rust {
        #[path = "1052-grumpy-bookstore-owner/maxSatisfied_test.rs"]
        mod test_max_satisfied;
        #[path = "0001-two-sum/twoSum_test.rs"]
        mod test_tow_sum;

        #[path = "2798-number-of-employees-who-met-the-target/numberOfEmployeesWhoMetTarget_test.rs"]
        mod test_number_of_employees_who_met_the_target;

        #[path = "2105-watering-plants-ii/minimumRefill_test.rs"]
        mod test_minimum_refill;
        #[path = "2097-watering-plants/wateringPlants_test.rs"]
        mod test_watering_plants;

        #[path = "2960-count-tested-devices-after-test-operations/countTestedDevices_test.rs"]
        mod test_count_tested_devices;
        #[path = "2391-minimum-amount-of-time-to-collect-garbage/garbageCollection_test.rs"]
        mod test_garbage_collection;
    }
}
