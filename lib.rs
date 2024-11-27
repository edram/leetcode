pub struct Solution {}

pub mod util;

pub mod leetcode {
    #[path = "0001-two-sum/twoSum.rs"]
    pub mod two_sum;

    #[path = "0521-longest-uncommon-subsequence-i/findLUSlength.rs"]
    pub mod find_lu_slength;

    #[path = "0682-baseball-game/calPoints.rs"]
    pub mod cal_points;

    #[path = "0881-boats-to-save-people/numRescueBoats.rs"]
    pub mod num_rescue_boats;

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

    #[path = "2288-apply-discount-to-prices/discountPrices.rs"]
    mod discount_prices;

    #[path = "2391-minimum-amount-of-time-to-collect-garbage/garbageCollection.rs"]
    pub mod garbage_collection;

    #[path = "2748-number-of-beautiful-pairs/countBeautifulPairs.rs"]
    pub mod the_count_beautiful_pairs;

    #[path = "2769-find-the-maximum-achievable-number/theMaximumAchievableX.rs"]
    pub mod the_maximum_achievable_x;

    #[path = "2798-number-of-employees-who-met-the-target/numberOfEmployeesWhoMetTarget.rs"]
    pub mod number_of_employees_who_met_target;

    #[path = "2806-account-balance-after-rounded-purchase/accountBalanceAfterPurchase.rs"]
    mod account_balance_after_purchase;

    #[path = "2938-separate-black-and-white-balls/minimumSteps.rs"]
    mod minimum_steps;

    #[path = "2951-find-the-peaks/findPeaks.rs"]
    pub mod find_peaks;

    #[path = "2956-find-common-elements-between-two-arrays/findIntersectionValues.rs"]
    pub mod find_intersection_values;

    #[path = "2960-count-tested-devices-after-test-operations/countTestedDevices.rs"]
    pub mod count_tested_devices;

    #[path = "2981-find-longest-special-substring-that-occurs-thrice-i/maximumLength.rs"]
    pub mod maximum_length;

    #[path = "3038-maximum-number-of-operations-with-the-same-score-i/maxOperations.rs"]
    pub mod max_operations;

    #[path = "3111-minimum-rectangles-to-cover-points/minRectanglesToCoverPoints.rs"]
    pub mod min_rectangles_to_cover_points;

    #[path = "3131-find-the-integer-added-to-array-i/addedInteger.rs"]
    pub mod added_integer;

    #[path = "3142-check-if-grid-satisfies-conditions/satisfiesConditions.rs"]
    pub mod satisfies_conditions;

    #[path = "3206-alternating-groups-i/numberOfAlternatingGroups.rs"]
    pub mod number_of_alternating_groups;

    #[path = "3248-snake-in-matrix/finalPositionOfSnake.rs"]
    pub mod final_position_of_snake;
    #[cfg(test)]
    #[path = ""]
    mod rust {
        #[path = "0001-two-sum/twoSum_test.rs"]
        mod test_tow_sum;

        #[path = "0521-longest-uncommon-subsequence-i/findLUSlength_test.rs"]
        pub mod test_find_lu_slength;

        #[path = "0682-baseball-game/calPoints_test.rs"]
        pub mod test_cal_points;

        #[path = "0881-boats-to-save-people/numRescueBoats_test.rs"]
        pub mod test_num_rescue_boats;

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

        #[path = "2288-apply-discount-to-prices/discountPrices_test.rs"]
        mod test_discount_prices;

        #[path = "2391-minimum-amount-of-time-to-collect-garbage/garbageCollection_test.rs"]
        mod test_garbage_collection;

        #[path = "2748-number-of-beautiful-pairs/countBeautifulPairs_test.rs"]
        pub mod the_count_beautiful_pairs;

        #[path = "2769-find-the-maximum-achievable-number/theMaximumAchievableX_test.rs"]
        pub mod test_the_maximum_achievable_x;

        #[path = "2798-number-of-employees-who-met-the-target/numberOfEmployeesWhoMetTarget_test.rs"]
        mod test_number_of_employees_who_met_the_target;

        #[path = "2806-account-balance-after-rounded-purchase/accountBalanceAfterPurchase_test.rs"]
        mod test_account_balance_after_purchase;

        #[path = "2938-separate-black-and-white-balls/minimumSteps_test.rs"]
        mod test_minimum_steps;

        #[path = "2951-find-the-peaks/findPeaks_test.rs"]
        pub mod test_find_peaks;

        #[path = "2956-find-common-elements-between-two-arrays/findIntersectionValues_test.rs"]
        pub mod test_find_intersection_values;

        #[path = "2960-count-tested-devices-after-test-operations/countTestedDevices_test.rs"]
        mod test_count_tested_devices;

        #[path = "2981-find-longest-special-substring-that-occurs-thrice-i/maximumLength_test.rs"]
        pub mod test_maximum_length;

        #[path = "3038-maximum-number-of-operations-with-the-same-score-i/maxOperations_test.rs"]
        pub mod test_max_operations;

        #[path = "3111-minimum-rectangles-to-cover-points/minRectanglesToCoverPoints_test.rs"]
        pub mod test_min_rectangles_to_cover_points;

        #[path = "3131-find-the-integer-added-to-array-i/addedInteger_test.rs"]
        pub mod test_added_integer;

        #[path = "3142-check-if-grid-satisfies-conditions/satisfiesConditions_test.rs"]
        pub mod test_satisfies_conditions;

        #[path = "3206-alternating-groups-i/numberOfAlternatingGroups_test.rs"]
        pub mod test_number_of_alternating_groups;

        #[path = "3248-snake-in-matrix/finalPositionOfSnake_test.rs"]
        pub mod test_final_position_of_snake;
    }
}
