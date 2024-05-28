pub struct Solution {}

pub mod util;

pub mod leetcode {
    #[path = "0001-two-sum/twoSum.rs"]
    pub mod two_sum;

    #[path = "1052-grumpy-bookstore-owner/maxSatisfied.rs"]
    pub mod max_satisfied;

    #[path = "1673-find-the-most-competitive-subsequence/mostCompetitive.rs"]
    pub mod most_competitive;

    #[path = "1953-maximum-number-of-weeks-for-which-you-can-work/numberOfWeeks.rs"]
    pub mod number_of_weeks;

    #[path = "2097-watering-plants/wateringPlants.rs"]
    pub mod watering_plants;

    #[path = "2028-find-missing-observations/missingRolls.rs"]
    mod missing_rolls;

    #[path = "2105-watering-plants-ii/minimumRefill.rs"]
    pub mod minimum_refill;

    #[path = "2225-find-players-with-zero-or-one-losses/findWinners.rs"]
    pub mod find_winners;

    #[path = "2244-minimum-rounds-to-complete-all-tasks/minimumRounds.rs"]
    pub mod minimum_rounds;

    #[path = "2391-minimum-amount-of-time-to-collect-garbage/garbageCollection.rs"]
    pub mod garbage_collection;

    #[path = "2769-find-the-maximum-achievable-number/theMaximumAchievableX.rs"]
    pub mod the_maximum_achievable_x;

    #[path = "2798-number-of-employees-who-met-the-target/numberOfEmployeesWhoMetTarget.rs"]
    pub mod number_of_employees_who_met_target;

    #[path = "2951-find-the-peaks/findPeaks.rs"]
    pub mod find_peaks;

    #[path = "2960-count-tested-devices-after-test-operations/countTestedDevices.rs"]
    pub mod count_tested_devices;

    #[cfg(test)]
    #[path = ""]
    mod rust {
        #[path = "0001-two-sum/twoSum_test.rs"]
        mod test_tow_sum;

        #[path = "1052-grumpy-bookstore-owner/maxSatisfied_test.rs"]
        mod test_max_satisfied;

        #[path = "1673-find-the-most-competitive-subsequence/mostCompetitive_test.rs"]
        pub mod test_most_competitive;

        #[path = "1953-maximum-number-of-weeks-for-which-you-can-work/numberOfWeeks_test.rs"]
        pub mod test_number_of_weeks;

        #[path = "2028-find-missing-observations/missingRolls_test.rs"]
        mod test_missing_rolls;

        #[path = "2097-watering-plants/wateringPlants_test.rs"]
        mod test_watering_plants;

        #[path = "2105-watering-plants-ii/minimumRefill_test.rs"]
        mod test_minimum_refill;

        #[path = "2225-find-players-with-zero-or-one-losses/findWinners_test.rs"]
        pub mod test_find_winners;

        #[path = "2244-minimum-rounds-to-complete-all-tasks/minimumRounds_test.rs"]
        mod test_minimum_rounds;

        #[path = "2391-minimum-amount-of-time-to-collect-garbage/garbageCollection_test.rs"]
        mod test_garbage_collection;

        #[path = "2769-find-the-maximum-achievable-number/theMaximumAchievableX_test.rs"]
        pub mod test_the_maximum_achievable_x;

        #[path = "2798-number-of-employees-who-met-the-target/numberOfEmployeesWhoMetTarget_test.rs"]
        mod test_number_of_employees_who_met_the_target;

        #[path = "2951-find-the-peaks/findPeaks_test.rs"]
        pub mod test_find_peaks;

        #[path = "2960-count-tested-devices-after-test-operations/countTestedDevices_test.rs"]
        mod test_count_tested_devices;
    }
}
